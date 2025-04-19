import React, { useState } from 'react'

import SignupForm from './SignupForm'

const USER_DATA_KEY = 'user-data'

const SessionStorageComponent = () => {

  const submitHandle = (formData) =>  {

    console.log(formData)
    const storeToLocal = JSON.stringify(formData)
    // localStorage.setItem('user-email', formData.email)
    sessionStorage.setItem(USER_DATA_KEY, storeToLocal)

  }

  const getuserData = () => {
   const userData =  sessionStorage.getItem(USER_DATA_KEY)
   const parsedData = JSON.parse(userData)
   console.log(parsedData)
  }
 
  return (
    <div>

      <h1>Session Storage Component</h1>

      <hr className='my-3' />



      <SignupForm submitForm={submitHandle} />


      <button onClick={getuserData}>
        Get User Data
      </button>

    </div>
  )
}

export default SessionStorageComponent
