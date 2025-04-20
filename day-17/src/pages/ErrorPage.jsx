import React from 'react'
import { Link } from 'react-router'

const ErrorPage = () => {
  return (
    <div className='flex h-screen justify-center items-center'>

        <div className='text-center'>
            <h1 className='font-bold text-3xl'>404</h1>
            <p>Page not found!</p>

            <Link to='/'>Go to Home</Link>
        </div>
      
    </div>
  )
}

export default ErrorPage
