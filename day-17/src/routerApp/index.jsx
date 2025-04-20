import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from '../pages/Home';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Navbar from '../components/Navbar';
import BlogDetails from '../pages/BlogDetails';
import ErrorPage from '../pages/ErrorPage';

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


const RouterApp = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/blog/:slug' element={<BlogDetails />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default RouterApp
