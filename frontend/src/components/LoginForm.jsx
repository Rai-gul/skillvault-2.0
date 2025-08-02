export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    // build form data
    const form = new URLSearchParams()
    form.append('username', username)
    form.append('password', password)

    // post to Django’s login endpoint, with cookies
    await axios.post('/api-auth/login/', form, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: true,
    })

    setUser({ username })
  }

  const logout = async () => {
    await axios.post('/api-auth/logout/', null, { withCredentials: true })
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
