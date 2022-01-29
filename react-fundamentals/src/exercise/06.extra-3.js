import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
    const [username, setUsername] = React.useState("")

    function handleChange(event) {
        let username = event.target.value.toLowerCase()
        setUsername(username)
    }


    function handleSubmit(event) {
        event.preventDefault()
         onSubmitUsername(username)
    }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
