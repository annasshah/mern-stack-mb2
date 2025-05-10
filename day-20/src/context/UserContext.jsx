import React, { createContext, useState } from 'react'


export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    const setUserDataHandle = (data) => {
        setUser(data)
    }

    return (
        <UserContext.Provider value={{user, setUserDataHandle}}>
            {children}
        </UserContext.Provider>
    )
}



// <UserProvider>
//     <div>


//     </div>
// </UserProvider>