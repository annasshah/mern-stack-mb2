import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

export const Profile = () => {

  const {user, setUserDataHandle} = useContext(UserContext)


  console.log('user', user)


  const userDataHandle = () => {

    const data = {
      "id": 1,
      "email": "john@mail.com",
      "password": "changeme",
      "name": "Jhon",
      "role": "customer",
      "avatar": "https://i.imgur.com/LDOO4Qs.jpg"
    }


    setUserDataHandle(data)
  
  }
  
  
  return (
    <div>Profile


      <div className='mt-5'>
        <button className='px-2 py-2 rounded-md bg-blue-700 text-white' onClick={userDataHandle}>
          Set User
        </button>
      </div>
    </div>

  )
}
