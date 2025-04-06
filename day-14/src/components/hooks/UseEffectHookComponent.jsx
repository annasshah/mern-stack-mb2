import React, { useEffect, useState } from 'react'
import LifeCycleComponent from '../lifeCycleComponent'

const UseEffectHookComponent = () => {
  const [count, setCount] = useState(0)
  const [anotherCount, setanotherCount] = useState(10)

  const updateCount = () => {
    const updatedCount = count + 1
    setCount(updatedCount)
  }


  const updateanotherCount = () => {
    const updatedCount = anotherCount + 10
    setanotherCount(updatedCount)
  }

  // without any dependency - run the block every re-render
  // useEffect(() => {
  //   console.log('inside the use effect hook')
  // })


  // with empty array dependency - mounting
  // useEffect(() => {
  //   console.log('inside the use effect hook -- empty array dependency')
  // }, [])

  // if( count || anotherCount){
  //   if(count)
  // }


  // with array dependency - with variable watch - updation 
  // useEffect(() => {
  //   console.log('inside the use effect hook -- array dependency - with variable watch')
  // }, [count,anotherCount])



  // with array dependency - with variable watch - handle unmount state
  // useEffect(() => {
  //   console.log('inside the use effect hook -- array dependency - with variable watch')
  //   // cleanup functions - to overcome the side effects of the state and previous executions
  //   return () => {
  //     console.log('Unmount component state')
  //   };

  // }, [count])



  useEffect(() => {
    console.log('inside the use effect hook -- array dependency - with variable watch')
    // cleanup functions - to overcome the side effects of the state and previous executions
    return () => {
      console.log('Unmount component state')
    };

  }, [count])



  return (
    <>

      <div>
        Use Effect
      </div>

      <hr />
      <div>

        <h1>Count: {count}</h1>
        <button className='bg-blue-600 rounded-lg px-4 py-2 text-white' onClick={updateCount} >Add + 1 </button>

      </div>
      <hr className='my-10' />

      <div>

        <h1>Another Count: {anotherCount}</h1>
        <button className='bg-blue-600 rounded-lg px-4 py-2 text-white' onClick={updateanotherCount} >Add + 10 </button>

      </div>
    </>
  )
}

export default UseEffectHookComponent
