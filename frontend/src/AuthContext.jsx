import React, { createContext, useState } from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    await axios.post('/api-auth/login/', { username, password })
    setUser({ username })
  }

  const logout = async () => {
    await axios.post('/api-auth/logout/')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
