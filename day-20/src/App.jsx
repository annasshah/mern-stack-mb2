import React, { useState } from 'react'
import { UserProvider } from './context/UserContext'
import { CountProvider } from './context/CountContext'
import { Profile } from './pages/Profile'
import Navbar from './components/Navbar'
import { CountRender } from './components/CountRender'

// const App = () => {
//   return (
//     <UserProvider>
//       <CountProvider >


//         <>
//           <Navbar />
//           <Profile />
//           <CountRender />
//         </>



//       </CountProvider>
//     </UserProvider>
//   )
// }



const App = () => {
  return (
    <>
      <UserProvider>
        <>
          <Navbar />
          <Profile />
        </>
      </UserProvider>

      <CountProvider >
        <CountRender />
      </CountProvider>
    </>
  )
}




export default App