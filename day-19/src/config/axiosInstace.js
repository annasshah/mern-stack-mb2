import axios from "axios"

const baseURL = "https://api.escuelajs.co/api/v1"

export const axiosInstance = axios.create({
    baseURL: baseURL
})


axiosInstance.interceptors.request.use((config)=> {

    console.log(config)

    config.headers["Content-Type"] = "application/json"

    const token = localStorage.getItem('@tokens')
    
    if(token){
        const parsedToken = JSON.parse(token)
        config.headers.Authorization = `Bearer ${parsedToken.access_token}`
    }
    return config

})


// axiosInstance.interceptors.response.use()
