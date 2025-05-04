import { toast } from "react-toastify"
import { axiosInstance } from "../config/axiosInstace"

export const loginUser = async (payload) => {
    try {
        const res = await axiosInstance.post('/auth/login', payload)
        const resData = res.data

        const storeData = JSON.stringify(resData)
        localStorage.setItem('@tokens', storeData)
        toast.success('Logged in successfully')
        return true
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
        return false
    }
}



export const getProfile = async () => {

    try{
        const res = await axiosInstance.get('/auth/profile')
    const resData = res.data

    console.log(resData)
    return resData
    }
    catch(error){
        console.log(error.message)
        toast.error(error.message)
        return null
    }
}



// setTimeout(() => {
    
// }, 0);

// console.log('hello')