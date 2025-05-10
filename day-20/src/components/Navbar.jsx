import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
// import { CountContext } from '../context/CountContext'

const Navbar = () => {
    const {user} = useContext(UserContext)
    // const {count} = useContext(CountContext)

    // console.log('test',user)
  return (
    <div className='py-3 bg-gray-400'>

        <div className='container mx-auto flex justify-between items-center'>
            
            <h1>Logo</h1>


           { user ? <div className='flex items-center space-x-3'>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                {/* <p>Count: {count}</p> */}
            </div> : <div>
                <p>loading....</p>
                </div>
                }
        </div>
      
    </div>
  )
}

export default Navbar
