import { EXPRESS_URL_LOGIN } from './expressUrl'

const login = async (user) => {
    try {
        console.log('login...')
        const response = await fetch(EXPRESS_URL_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if(response.status === 200) {

        }
        // console.log(response.status)
        console.log('------')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export default login
