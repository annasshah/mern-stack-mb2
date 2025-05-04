import React, { useState } from 'react'
import InputComponent from '../components/InputComponent'
import { loginUser } from '../services/authService'
import { useNavigate } from 'react-router'

const Login = () => {

  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  const submitHandle = async (e) => {
    e.preventDefault()

    const res = await loginUser(formData)
    if(res){
      e.target.reset()
      navigate('/profile')
    }
    // try {
    //   const res = await axiosInstance.post('/auth/login', formData)
    //   const resData = res.data
    //   console.log(resData)

    //   const storeData = JSON.stringify(resData)
    //   localStorage.setItem('@tokens', storeData)
    //   toast.success('Logged in successfully')
    //   e.target.reset()
    // } catch (error) {
    //   console.log(error.message)
    //   toast.error(error.message)
      
    // }
  }

  const changeHandle = (key, value) => {
    setFormData((pre) => {
      return { ...pre, [key]: value }
    })
  }

  return (
    <div className='h-[85dvh] grid place-items-center'>
      <div className='max-w-3xl w-full'>
        <form onSubmit={submitHandle} className='w-full space-y-4'>
          <h2 className='text-2xl font-bold' >Login</h2>
          <InputComponent onChange={(e) => changeHandle('email', e.target.value)} required placeholder='Enter email' type='email' />
          <InputComponent onChange={(e) => changeHandle('password', e.target.value)} required placeholder='Enter password' type="password" />
          <button type='submit' className='bg-blue-500 text-white px-3 py-2 rounded-lg'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
