import axios from 'axios'

const $host = axios.create({  // request wihtout authorization
    baseURL: process.env.REACT_APP_API_URL // import server URL from system variabe. (.env file)
})

const $authHost = axios.create({ // request with authorization
    baseURL: process.env.REACT_APP_API_URL // import server URL from system variabe. (.env file)
})


const authInterceptor = config => { // Interceptor auto deliver token to all request, $authHost need it
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}` // get token from local storage (when user login, token add to local storage)
    return config
}

$authHost.interceptors.request.use(authInterceptor)  // add token header authorization ($authHost)

export {
    $host,
    $authHost
}