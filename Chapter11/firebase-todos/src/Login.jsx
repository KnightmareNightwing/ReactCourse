import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setError('')
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
      // No navigation needed: onAuthStateChanged in AuthProvider sees the new user
    } catch (err) {
      setError(err.code) // e.g. auth/invalid-credential, auth/weak-password
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>{isSignUp ? 'Create an account' : 'Sign in'}</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form action={handleSubmit}>
        <Form.Group className="mb-2" controlId="email">
          <Form.Control type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Control type="password" placeholder="Password (6+ characters)" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">{isSignUp ? 'Sign up' : 'Sign in'}</Button>{' '}
        <Button variant="link" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'I already have an account' : 'Create an account'}
        </Button>
      </Form>
    </div>
  )
}

export default Login
