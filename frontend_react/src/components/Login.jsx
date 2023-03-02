import Button from "./shared/Button"

const Login = ({ handleLogin, user, setUser}) => {
    const {   username, password } = user

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    return (
        <form onSubmit={handleLogin}>
            <div>
                username
                <input
                    type="text"
                    value={username}
                    name="username"
                    onChange={handleChange}
                />
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                />
            </div>
            <Button className='button' type="submit">
                login
            </Button>
        </form>
    )
}

export default Login
