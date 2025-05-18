import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Profile } from './pages/Profile'
import { useDispatch } from 'react-redux'
import { setUserData } from './features/auth/authSlice'


export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {

    const user = localStorage.getItem('@user-data')
    let parsedData = null
    // if(user){
    //   parsedData = JSON.parse(user)
    //   dispatch(setUserData({userData: parsedData}))
    // }
    // else{
    //   dispatch(setUserData({userData: null}))
    // }
    if (user) {
      parsedData = JSON.parse(user)
    }
    setTimeout(() => {
      dispatch(setUserData({ userData: parsedData }))
    }, 2000);
  }, [])

  return (
    <>
      <Navbar />
      <Profile />
    </>
  )
}