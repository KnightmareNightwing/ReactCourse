import { useEffect, useState } from 'react'
import {
  collection, query, where, onSnapshot,
  addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'

const todosRef = collection(db, 'todos')

export default function useTodos(uid) {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if (!uid) return
    // Only this user's todos. The security rules enforce the same thing on the server.
    const q = query(todosRef, where('uid', '==', uid))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
      list.sort((a, b) => (a.createdAt?.toMillis() ?? 0) - (b.createdAt?.toMillis() ?? 0))
      setTodos(list)
    }, (error) => {
      // e.g. permission-denied when a query asks for documents the rules won't allow
      console.error('Firestore listener:', error.code)
    })
    return unsubscribe
  }, [uid])

  const addTodo = (text) =>
    addDoc(todosRef, { text, uid, createdAt: serverTimestamp() })

  const editTodo = (id, text) => updateDoc(doc(db, 'todos', id), { text })

  const deleteTodo = (id) => deleteDoc(doc(db, 'todos', id))

  return { todos, addTodo, editTodo, deleteTodo }
}
