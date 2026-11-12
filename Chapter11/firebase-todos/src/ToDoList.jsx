import { useState } from 'react'
import { Table, Form, Button } from 'react-bootstrap'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
import { useAuth } from './AuthContext'
import useTodos from './useTodos'

function ToDoList() {
  const { user } = useAuth()
  const { todos, addTodo, editTodo, deleteTodo } = useTodos(user.uid)
  const [todoText, setTodoText] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState(null)
  const buttonTitle = editMode ? 'Edit' : 'Add'

  const handleSubmit = () => {
    if (!todoText.trim()) return
    // Don't await: the write promise only resolves when the server confirms it,
    // but onSnapshot already shows the change locally (latency compensation).
    if (editMode) {
      editTodo(todoToEdit.id, todoText).catch((err) => console.error(err.code))
      setEditMode(false)
      setTodoToEdit(null)
    } else {
      addTodo(todoText).catch((err) => console.error(err.code))
    }
    setTodoText('')
  }

  return (
    <div style={{ maxWidth: 700, margin: '40px auto' }}>
      <p>
        Signed in as <strong>{user.email}</strong>{' '}
        <Button variant="outline-secondary" size="sm" onClick={() => signOut(auth)}>Sign out</Button>
      </p>
      <Form action={handleSubmit}>
        <Form.Group controlId="todoForm">
          <Form.Control type="text" placeholder="Enter To Do" value={todoText}
            onChange={(e) => setTodoText(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" className="my-2">{buttonTitle}</Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr><th>To Do</th><th>Edit</th><th>Delete</th></tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td>
                <Button variant="link" onClick={() => {
                  setTodoText(todo.text); setEditMode(true); setTodoToEdit(todo)
                }}>Edit</Button>
              </td>
              <td>
                <Button variant="link" onClick={() => deleteTodo(todo.id).catch((err) => console.error(err.code))}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ToDoList
