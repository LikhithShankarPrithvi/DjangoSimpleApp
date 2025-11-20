import { useState } from 'react'

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  const [loggedUser, setLoggedUser] = useState("")

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password })
    })

    const data = await res.json()

    if (res.status === 200) {
      setLoggedIn(true)
      setLoggedUser(data.username) 
    }

    setMsg(data.message)
  }

  const handleLogout = async () => {
    const res = await fetch("http://localhost:8000/api/logout/", {
      method: "GET",
      credentials: "include"
    })

    const data = await res.json()
    setMsg(data.message)

    setLoggedIn(false)
    setLoggedUser("")  
  }

  return (
    <div style={{ padding: 20 }}>
      
      {!loggedIn && (
        <>
          <h2>Login</h2>
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br/><br/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
          <button onClick={handleLogin}>Login</button>
        </>
      )}

      {loggedIn && (
        <>
          <h2>You are logged in</h2>

          <p>Welcome, <b>{loggedUser}</b></p>  

          <button onClick={handleLogout}>Logout</button>
        </>
      )}

      <p>{msg}</p>
    </div>
  )
}

export default App
