const TODOS_ENDPOINT = process.env.NODE_ENV === 'development' ?
    'http://localhost:3001/api/todos'
    : '/api/todos'
const LOGIN_ENDPOINT = process.env.NODE_ENV === 'development' ?
    'http://localhost:3001/api/login'
    : '/api/login'

export { TODOS_ENDPOINT, LOGIN_ENDPOINT }
