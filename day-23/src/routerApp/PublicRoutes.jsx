import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { Outlet } from 'react-router'

const PublicRoutes = () => {


    const {auth} = useSelector((state)=>state.auth)

    return !auth ? <Outlet /> : <Navigate to='/' />
}

export default PublicRoutes



// <MainComponent>
//     ....
// </MainComponent>