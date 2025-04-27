import React from 'react'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";
import Home from '../pages/Home';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Navbar from '../components/Navbar';
import BlogDetails from '../pages/BlogDetails';
import Dashboard from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import AboutPageLayout from '../components/AboutPageLayout';

// const  {name: username} = data
// -----------------  Basic Routing -----------------
// const RouterApp = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/about' element={<About />} />

//             </Routes>
//         </Router>
//     )
// }


// const routes = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,

//     },
// ]);


const RouterApp = () => {

    // return  <RouterProvider router={routes} />

    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path='/' element={<Home />} />

                {/* Creating wrapper for the about page to make layout */}
                <Route  element={<AboutPageLayout />}>
                    <Route path='/about' element={<About />} />
                </Route>






                {/* Decleared as Public routes */}
                <Route element={<PublicRoutes />} >
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Route>

                {/* Decleared as protected routes */}
                <Route element={<ProtectedRoutes />}>
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/blog/:slug' element={<BlogDetails />} />
                </Route>

                {/* Nested Routes */}
                <Route path='/dashboard/*' element={<Dashboard />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default RouterApp
