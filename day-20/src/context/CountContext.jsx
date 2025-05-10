import React, { createContext, useState } from 'react'


export const CountContext = createContext()

export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)


    const setCountDataHandle = (number) => {
        setCount(number)
    }

    return (
        <CountContext.Provider value={{count, setCountDataHandle}}>
            {children}
        </CountContext.Provider>
    )
}

