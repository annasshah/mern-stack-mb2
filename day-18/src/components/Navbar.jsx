import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    // const navigateHandle = () => {

    // }
    return (
        <div className='py-4 bg-slate-300 mb-4'>

            <div className='container mx-auto  flex justify-between items-center'>
                <div>
                    <h1 className='font-bold text-xl'>Logo</h1>
                </div>
                <ul className='flex items-center space-x-4 '>
                    <li><Link to='/' > Home </Link></li>
                    <li><Link to='/about' > About </Link></li>
                    <li><Link to='/blogs' > Blogs </Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
