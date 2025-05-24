import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
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
import CreateBlog from '../pages/CreateBlog';


const RouterApp = () => {


    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/about' element={<About />} />

                {/* Decleared as Public routes */}
                <Route element={<PublicRoutes />} >
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Route>

                {/* Decleared as protected routes */}
                <Route element={<ProtectedRoutes />}>
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/blog/:slug' element={<BlogDetails />} />
                    <Route path='/blog/create' element={<CreateBlog />} />
                </Route>

                {/* Nested Routes */}
                <Route path='/dashboard/*' element={<Dashboard />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default RouterApp
