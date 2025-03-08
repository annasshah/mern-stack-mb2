// Component
// const App = () => {

//   return <div>
//     <h1>Hello world .....!</h1>
//     {/* <a href="https://google.com">
//       Go to google
//     </a> */}
//   </div>

// }

// export default App

// function
// const app = () => {

// }

// module  - MJS 


import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { PricingSection } from './components/PricingSection'
import './App.css'


const App = () => {


  return <React.Fragment>
    <Navbar />
    <HeroSection />
    <PricingSection />




  </React.Fragment>


}


export default App

