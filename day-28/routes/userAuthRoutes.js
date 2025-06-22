import {Router } from 'express' 
import { loginController, registerController } from '../controllers/userAuthControllers.js'

const router = Router()


router.post('/register', registerController)
router.post('/login', loginController)




export default router