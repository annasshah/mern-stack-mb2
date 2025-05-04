import React, { useEffect, useState } from 'react'
import { getProfile } from '../services/authService'

const Profile = () => {

    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        !(async () => {
            const response = await getProfile()
            if (response) {
                setUserData(response)
                setLoading(false)
            }
            else {
                setLoading(false)
            }

        })()

    }, [])

    return (
        <div>
            {
                loading ? <div> <p>Loading...</p> </div> : <div>
                <img src={userData?.avatar} className='size-20 rounded-full object-contain' />
                <h2>email: {userData?.email}</h2>
                <h2>name: {userData?.name}</h2>
                <h2>role: {userData?.role}</h2>
            </div> 
            }

        </div>
    )
}

export default Profile
