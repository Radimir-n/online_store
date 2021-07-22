import axios from 'axios'

const $host = axios.create({ //без токена
    baseURL: 'http://localhost:5000/'
})

const $authHost = axios.create({ // с токеном
    baseURL: 'http://localhost:5000/'
})

const authInterceptor = config =>{
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}