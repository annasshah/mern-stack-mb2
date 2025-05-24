import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router'
import DashboardHome from './dashboard/index'
import Customers from './dashboard/Customers'
import Products from './dashboard/Products'
import { GoHome } from "react-icons/go";
import { MdGroups2 } from "react-icons/md";
import { BsGrid } from "react-icons/bs";


const Dashboard = () => {
  return (
    <div className='h-screen w-full flex'>

      <div className='w-1/5 bg-blue-600 h-full text-white text-xl px-3'>

        <div className='py-3 mb-6'>
          <h1 className='text-2xl'>Logo</h1>
        </div>

        {/* <ul className='space-y-5 '>
          <li ><Link className='flex items-center space-x-2' to='/dashboard/'>
            <GoHome size={25} /><span>Home</span></Link></li>

          <li ><Link className='flex items-center space-x-2' to='/dashboard/customers'>
            <MdGroups2 size={25} /><span>Customers</span></Link></li>


          <li ><Link className='flex items-center space-x-2' to='/dashboard/products'>
            <BsGrid size={25} /><span>Products</span></Link></li>
        </ul> */}
        <ul className='space-y-5 '>
          <li >
            <NavLink to='/dashboard/home'>
              {({ isActive }) => (
                <span className={`flex py-2 rounded-md px-3 items-center space-x-2 ${isActive ? "bg-red-600" : ""}`}> <GoHome size={25} /><span>Home</span></span>
              )}
            </NavLink>
          </li>

          
          <li >
            <NavLink to='/dashboard/customers'>
              {({ isActive }) => (
                <span className={`flex py-2 rounded-md px-3 items-center space-x-2 ${isActive ? "bg-red-600" : ""}`}> <MdGroups2 size={25} /><span>Customers</span></span>
              )}
            </NavLink>
          </li>


          <li >
            <NavLink to='/dashboard/products'>
              {({ isActive }) => (
                <span className={`flex py-2 rounded-md px-3 items-center space-x-2 ${isActive ? "bg-red-600" : ""}`}> <BsGrid size={25} /><span>Products</span></span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>



      <div className='w-4/5  h-full text-xl'>
        <div className='bg-slate-300 py-4 px-4 shadow-md mb-5 flex items-center justify-between'>
          <div>
            <h1>Welcome Back!</h1>
          </div>

          <div className='flex items-center space-x-3'>
            <h2>
              Admin
            </h2>
            <div className='py-3 px-3 w-fit rounded-full bg-blue-900 text-white'>
              AD
            </div>
          </div>
        </div>



        <div className='px-4'>
          <Routes>
            <Route path='/home' element={<DashboardHome />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
