import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Products from '../pages/Products';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';

import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';



const RouterApp = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default RouterApp
