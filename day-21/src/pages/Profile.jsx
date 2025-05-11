import React from 'react'
import { updateUserData } from '../redux/actions/userAction'
import { useDispatch } from 'react-redux'

export const Profile = () => {

  const dispatch = useDispatch()



  const userDataHandle = () => {

    const data = {
      "id": 1,
      "email": "john@mail.com",
      "password": "changeme",
      "name": "Jhon",
      "role": "customer",
      "avatar": "https://i.imgur.com/LDOO4Qs.jpg"
    }


    const dispatchObj = updateUserData(data)

    dispatch(dispatchObj)
  }


  const logoutHandle = () => {

    dispatch({type: "USER_LOGOUT"})

  }

  return (
    <div className='container mx-auto'>
      <h1>User Profile</h1>
      <div className='mt-5 space-x-5'>
        <button className='px-2 py-2 rounded-md bg-blue-700 text-white' onClick={userDataHandle}>
          Set User
        </button>
        <button className='px-2 py-2 rounded-md bg-red-500 text-white' onClick={logoutHandle}>
          Logout
        </button>
      </div>
    </div>
  )
}
