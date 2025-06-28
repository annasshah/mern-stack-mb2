import { addUser, getUserByEmail } from "../utils/userCrud.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const registerController = async (req, res) => {

    try {

        const data = req.body
        // username
        // email
        // password

        if (!data.username || !data.email || !data.password) {

            return res.status(400).json({ success: false, message: 'All fields are required!' })

        }


        //  add validation layer here - if you are using custom validator
        // ----



        const findUser = await getUserByEmail(data.email)


        if (findUser) {
            return res.status(400).json({ success: false, message: 'Email already exist!' })
        }


        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(data.password, salt);


        const user = {
            username: data.username,
            email: data.email.toLowerCase(),
            password: password
            // hasing for the password to make it secure
        }


        await addUser(user)
        return res.json({ success: true, message: 'Registered successfully!' })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }

}

export const loginController = async (req, res) => {

    try {

        const data = req.body
        // email
        // password

        if (!data.email || !data.password) {
            return res.status(400).json({ success: false, message: 'All fields are required!' })
        }

        //  add validation layer here - if you are using custom validator
        // ----

        const findUser = await getUserByEmail(data.email)

        if (!findUser) {
            return res.status(402).json({ success: false, message: 'Invalid credentials' })
        }


        const isValidPassword = bcrypt.compareSync(data.password, findUser.password)


        if (!isValidPassword) {
            return res.status(402).json({ success: false, message: 'Invalid credentials' })
        }

        delete findUser.password

        const payload = {
            userId: findUser.id,
            email: findUser.email,
            username: findUser.username
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })

        return res.json({
            success: true, message: 'Logged successfully!', data: {
                token: token,
                user: findUser
            }
        })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}



export const profileController = async (req, res) => {


    try {
        const userEmail = req.userEmail
        const findUser = await getUserByEmail(userEmail)
        delete findUser.password

        return res.json({success:true, data: findUser})
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })

    }

}

// req.headers.cookies
// res.cookies


// --->  profile  <--- identify the user  --->
// get token from cookies --- if exist ---- verify the token --- success ----  extract data from the token
// data for example --- userId, username, email, phone
// search the user against the userId ---- can get the user details
// res returned to user with their profile data 