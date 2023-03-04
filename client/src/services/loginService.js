import { LOGIN_ENDPOINT } from './constants'

const login = async (user) => {
    try {
        console.log('login...')
        const response = await fetch(LOGIN_ENDPOINT, {
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
