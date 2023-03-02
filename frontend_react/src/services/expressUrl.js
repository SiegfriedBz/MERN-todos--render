const EXPRESS_URL_NOTES = process.env.NODE_ENV === 'development' ?
    'http://localhost:3001/api/notes'
    : '/api/notes'
const EXPRESS_URL_LOGIN = process.env.NODE_ENV === 'development' ?
    'http://localhost:3001/api/login'
    : '/api/login'

export { EXPRESS_URL_NOTES, EXPRESS_URL_LOGIN }
