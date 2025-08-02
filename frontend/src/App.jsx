import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import LoginForm from './components/LoginForm'
import NoteList from './components/NoteList'

export default function App() {
  const { user, login, logout } = useContext(AuthContext)

  if (!user) {
    return <LoginForm onLogin={login} />
  }

  return (
    <div className="container mx-auto p-4">
      <button onClick={logout} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
        Logout
      </button>
      <h1 className="text-2xl font-bold mb-4">Your Notes</h1>
      <NoteList />
    </div>
  )
}
