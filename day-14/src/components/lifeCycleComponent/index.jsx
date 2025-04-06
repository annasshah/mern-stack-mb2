import React, { useState } from 'react'

const LifeCycleComponent = () => {
    const [count, setCount] = useState(0)

    const updateCount = () => {
        const updatedCount = count + 1
        setCount(updatedCount)
    }
  return (
    <div>

        <h1>Count: {count}</h1>



        <button onClick={updateCount} >Add + 1 </button>
      
    </div>
  )
}

export default LifeCycleComponent
