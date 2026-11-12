import { AuthProvider, useAuth } from './AuthContext'
import Login from './Login'
import ToDoList from './ToDoList'

function Screen() {
  const { user, loading } = useAuth()
  if (loading) return <p style={{ margin: 40 }}>Loading…</p>
  return user ? <ToDoList /> : <Login />
}

function App() {
  return (
    <AuthProvider>
      <Screen />
    </AuthProvider>
  )
}

export default App
