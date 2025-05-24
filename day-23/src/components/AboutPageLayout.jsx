import React from 'react'
import { Outlet } from 'react-router'

const AboutPageLayout = () => {
  return (
    <div>
        <h1 className='bg-slate-400 py-3 ps-2 '>
            THis is layout for the about page
        </h1>


        <Outlet />
      
    </div>
  )
}

export default AboutPageLayout
