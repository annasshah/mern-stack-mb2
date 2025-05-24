import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const Navbar = () => {
    // const state = useSelector((state)=>state.auth)
    // const {auth} = useSelector((state)=>state)
    const { auth } = useSelector((store) => store)

    // const obj = {
    //     name: 'xyz',
    //     email:'mail@mail.com'
    // }

    // obj.name

    return (
        <div className='py-3 bg-gray-200 mb-5'>

            <div className='container mx-auto flex justify-between items-center'>

                <h1>Logo</h1>

                <ul className='flex items-center space-x-4 '>
                    <li><Link to='/' > Home </Link></li>
                    <li><Link to='/about' > About </Link></li>
                    <li><Link to='/blogs' > Blogs </Link></li>
                </ul>


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


export default Navbar