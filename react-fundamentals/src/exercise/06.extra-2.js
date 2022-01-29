import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
    const usernameRef = React.useRef("")
    const [errorMessage, setErrorMessage] = React.useState("")

    function handleChange(event) {
        let username = event.target.value;
        const isValid = username === username.toLowerCase();
        setErrorMessage(isValid ? null : 'Username must be lower case')
    }


    function handleSubmit(event) {
        event.preventDefault()
        onSubmitUsername(usernameRef.current.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" ref={usernameRef} onChange={handleChange}/>
                <div role="alert" style={{color: 'red'}}>
                    {errorMessage}
                </div>
            </div>
            <button type="submit" disabled={Boolean(errorMessage)}>Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
