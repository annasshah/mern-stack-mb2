import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './features/auth/authSlice'
import RouterApp from './routerApp'
import { Toaster } from 'react-hot-toast'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'


export default function App() {

  const dispatch = useDispatch()
  const {loading} = useSelector((state)=>state.auth)

  useEffect(() => {


    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;

        const userData = {
          name: uid,
          email
        }
        dispatch(setUserData({ userData: userData }))
      } else {
        dispatch(setUserData({ userData: null }))
      }
    });

  }, [])


  if(loading){

    return <div className='h-screen flex items-center justify-center '>
      <h1 className='font-bold text-gray-400 text-2xl'>Loading...</h1>
    </div>
  }

  return (
    <>
      <RouterApp />
      <Toaster />
    </>
  )
}