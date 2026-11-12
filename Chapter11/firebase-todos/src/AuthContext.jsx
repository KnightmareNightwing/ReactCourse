import { createContext, use, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fires once with the current user (or null), then again on every sign-in / sign-out
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })
    return unsubscribe // stop listening when the provider unmounts
  }, [])

  return <AuthContext value={{ user, loading }}>{children}</AuthContext>
}

export function useAuth() {
  return use(AuthContext)
}
