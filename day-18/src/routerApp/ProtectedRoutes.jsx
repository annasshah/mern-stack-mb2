import React from 'react'
import { Navigate } from 'react-router'
import { Outlet } from 'react-router'

const ProtectedRoutes = () => {

    // your api / authentication result received and stored into auth variable...
    const auth =  true

    return auth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes



// <MainComponent>
//     ....
// </MainComponent>