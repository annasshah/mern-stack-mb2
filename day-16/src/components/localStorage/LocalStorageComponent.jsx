import React, { useState } from 'react'

import SignupForm from './SignupForm'

const USER_DATA_KEY = 'user-data'

const LocalStorageComponent = () => {

  const [isSuccess, setIsSuccess] = useState(false)

  // const submitHandle = (formData) =>  {

  //   console.log(formData)
  //   const storeToLocal = JSON.stringify(formData)
  //   // localStorage.setItem('user-email', formData.email)
  //   localStorage.setItem(USER_DATA_KEY, storeToLocal)

  //   setTimeout(() => {
  //     setIsSuccess(true)

  //   }, 2000);

  // }
  const submitHandle = (formData) => {

    const userData = localStorage.getItem(USER_DATA_KEY)

    let addNew = []

    if (userData) {
      const parsedData = JSON.parse(userData)
      addNew = [...parsedData]
    }

    addNew = [...addNew, formData]
    const storeToLocal = JSON.stringify(addNew)
    // localStorage.setItem('user-email', formData.email)
    localStorage.setItem(USER_DATA_KEY, storeToLocal)

    setTimeout(() => {
      setIsSuccess(true)

    }, 2000);

  }

  const getuserData = () => {
    const userData = localStorage.getItem(USER_DATA_KEY)
    const parsedData = JSON.parse(userData)
    console.log(parsedData)
  }

  const clearstorage = () => {
    localStorage.removeItem(USER_DATA_KEY)

  }
  const clearAllstorage = () => {
    localStorage.clear()

  }

  return (
    <div>

      <h1>Local Storage Component</h1>

      <hr className='my-3' />



      <SignupForm key={isSuccess ? 0 : 1} submitForm={submitHandle} />


      <button onClick={getuserData}>
        Get User Data
      </button>
      <button className='block' onClick={clearstorage}>
        Remove  User Data
      </button>
      <button className='block' onClick={clearAllstorage}>
        Remove  All Storage Data
      </button>

    </div>
  )
}

export default LocalStorageComponent
