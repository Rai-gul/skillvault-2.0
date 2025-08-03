import React, { createContext, useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL = '/'  // proxy to Django
export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  // If we have a token, attach it to all requests
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
  }

  const login = async (username, password) => {
    const resp = await axios.post('/api-token-auth/', { username, password })
    const t = resp.data.token
    localStorage.setItem('token', t)
    setToken(t)
    axios.defaults.headers.common['Authorization'] = `Token ${t}`
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    delete axios.defaults.headers.common['Authorization']
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
