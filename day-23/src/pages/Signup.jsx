import React, { useState } from 'react'
import InputComponent from '../components/InputComponent'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import toast from 'react-hot-toast'

const Signup = () => {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)

  const changeHandle = (key, value) => {

    setFormData((pre) => {

      return { ...pre, [key]: value }
    })
  }

  const submitHandle = (e) => {
    e.preventDefault()


    const {email, password} = formData

    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        console.log('user', user)
        setLoading(false)
        toast.success('Signed up successfully!')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log('errorMessage', errorMessage)
        toast.error(errorMessage)
        setLoading(false)
      })
      

  }

  return (
    <div className='h-[90dvh] flex justify-center items-center'>


      <div className='max-w-2xl w-full rounded-lg py-5 px-4 bg-gray-50 shadow-md'>
        <h1 className='text-2xl font-bold text-center mb-3'>
          Signup
        </h1>

        <form onSubmit={submitHandle} className='space-y-4'>
          <InputComponent onChange={(e) => changeHandle('name', e.target.value)} required placeholder='Enter name' />
          <InputComponent onChange={(e) => changeHandle('email', e.target.value)} required placeholder='Enter email' type='email' />
          <InputComponent onChange={(e) => changeHandle('password', e.target.value)} required placeholder='Enter password' type='password' />

          <button disabled={loading} className='w-full disabled:opacity-35 bg-blue-700 text-white rounded-md py-2 text-center'>
            {loading ? "Loading..." : "Signup"}
          </button>
        </form>
      </div>

    </div>
  )
}

export default Signup
