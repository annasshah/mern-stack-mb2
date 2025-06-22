import { addUser, getUserByEmail } from "../utils/userCrud.js"
import bcrypt from "bcryptjs";

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


        return res.json({
            success: true, message: 'Logged successfully!', data: {
                token: '',
                user: findUser
            }
        })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}