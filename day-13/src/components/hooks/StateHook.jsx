import React, { useState } from 'react'

const StateHook = () => {
    // const [state, setState] = useState()
    const [num, setNum] = useState(1)


    // let num = 3

    // const handleCLick = () => {
    //     num += 1
    //     console.log(num)
    //     // document.getElementById('num').innerHTML = num
    // }
    const handleCLick = () => {
        const newNum = num + 1
        setNum(newNum)
    }


    // console.log('rendering the component')


  return (
    <div>
        <h1 className='text-2xl font-bold'>Number: <span id='num'>{num}</span></h1>
        <button onClick={handleCLick}>
            Click to add
        </button>
    </div>
  )
}

export default StateHook
