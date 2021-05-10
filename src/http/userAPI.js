import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"


/* function for user registation */
export const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' }) // get data from server response
    localStorage.setItem('token', data.token) // save token from request body to local storage
    return jwt_decode(data.token)  // return decoded token
    

}

/* function for user login */
export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
    
}

/* function for check user status */
export const check = async () => { 
    const { data } = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
    
}