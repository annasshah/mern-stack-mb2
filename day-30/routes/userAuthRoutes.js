import {Router } from 'express' 
import { loginController, profileController, registerController } from '../controllers/userAuthControllers.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = Router()


router.post('/register', registerController)
router.post('/login', loginController)


router.get('/profile',authMiddleware, profileController)




export default router