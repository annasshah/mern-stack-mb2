import React, { useState } from 'react'
import HighOrderComponent from './components/highOrderComponent'
import ChildrenConcept from './components/highOrderComponent/childrenConcept'
// import UseMemoHook from './components/UseMemoHook'

const App = () => {

  // const [count, setCount] = useState(0)
  // return (
  //   <div>
  //     <h1>Day 15</h1>
  //     <hr className='my-5' />


  //     <div>
  //       <h2>
  //         Count: {count}
  //       </h2>
  //     <button onClick={()=>setCount(count + 1)}>
  //       Click here
  //     </button>
  //     </div>

  //     <hr className='my-5' />
  //     <UseMemoHook />
  //   </div>
  // )







  return <>
    {/* <HighOrderComponent /> */}
    <ChildrenConcept />
  </>
}

export default App
