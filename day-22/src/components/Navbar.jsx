import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    // const state = useSelector((state)=>state.auth)
    // const {auth} = useSelector((state)=>state)
    const {auth} = useSelector((store)=>store)

    // const obj = {
    //     name: 'xyz',
    //     email:'mail@mail.com'
    // }
    
    // obj.name

    return (
        <div className='py-3 bg-gray-400'>

            <div className='container mx-auto flex justify-between items-center'>

                <h1>Logo</h1>


                {auth.loading ? <div><h1>Loading....</h1></div> : auth?.userData ? <div className='flex items-center space-x-3'>
                    <p>{auth?.userData?.name}</p>
                    <p>{auth?.userData?.email}</p>
                </div> : <div className='flex items-center space-x-4'>
                    <p>Login</p>
                    <p>Register</p>
                </div>
                }
            </div>

        </div>
    )
}
