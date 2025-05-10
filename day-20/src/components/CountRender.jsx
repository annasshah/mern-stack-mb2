import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext'

export const CountRender = () => {

    const {count, setCountDataHandle} = useContext(CountContext)


    const clickHandle = () => {
        setCountDataHandle(count + 1)
    }
  return (
    <div>CountRender


        <h1>Current count: {count}</h1>

        <button className='px-2 py-2 rounded-md bg-blue-700 text-white' onClick={clickHandle}>
          Change count
        </button>
    </div>
  )
}
