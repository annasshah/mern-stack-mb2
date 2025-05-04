import React from 'react'
import RouterApp from './routerApp'
import { ToastContainer } from 'react-toastify'
// import Navbar from './components/Navbar'


const App = () => {
  // window.location.reload()
  return (
      <>
      {/* <Navbar /> */}
      <RouterApp />
      <ToastContainer />
      </>
  )
}

export default App
