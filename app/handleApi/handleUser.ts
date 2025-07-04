import { RegisterUser } from "../interfaces/interfaces"

const login = async (password: string, email: string) => {
    const data = {
        password,
        email
    }
    const res = await fetch('http://localhost:8000/api/v1/user/login', {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
            'content-type': 'Application/json'
        }

    })
    const userData = await res.json()
    return userData
}

const registerUser = async ({ userData }: { userData: RegisterUser }) => {
    const data = {
        password: userData.password,
        email: userData.email,
        name: userData.name
    }
    const res = await fetch('http://localhost:8000/api/v1/user/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'Application/json',
        },
        credentials: 'include'
    })
    const result = await res.json()
    return result
}

const logout = async () => {
    try {
        const res = await fetch('http://localhost:8000/api/v1/user/logout', {
            method: "POST",
            credentials: 'include'
        })
        const result = res.json()
        return result
    } catch (error) {
        console.log('Loogout failed')
    }
}

export {
    login as userLogin,
    registerUser,
    logout as userLogout
}