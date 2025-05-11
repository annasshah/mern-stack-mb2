import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const user = useSelector((state)=>state.user)

    console.log(user)
    return (
        <div className='py-3 bg-gray-400'>

            <div className='container mx-auto flex justify-between items-center'>

                <h1>Logo</h1>


                {user?.data ? <div className='flex items-center space-x-3'>
                    <p>{user?.data?.name}</p>
                    <p>{user?.data?.email}</p>
                </div> : <div className='flex items-center space-x-4'>
                    <p>Login</p>
                    <p>Register</p>
                </div>
                }
            </div>

        </div>
    )
}
