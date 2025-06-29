import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization
        const authToken = authHeader?.split(' ')?.[1]

        if (!authToken) {
            return res.status(401).json({ success: false, message: 'Access token is required!' })
        }

        let jwtDecode = null
        jwt.verify(authToken, process.env.JWT_SECRET, function (err, decoded) {

            if (err) {
                return res.status(403).json({ success: false, message: 'Invalid or expired token!' })
            }
            jwtDecode = decoded
        });


        // session checking --- 
        


        req.userEmail = jwtDecode.email
        req.userId = jwtDecode.userId
        next()

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })

    }


}