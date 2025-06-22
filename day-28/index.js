import express from 'express'
import todoRoutes from './routes/todoRoutes.js'
import userAuthRoutes from './routes/userAuthRoutes.js'

const app = express()
const PORT = 8000
app.use(express.json())

// app.get('/', (req, res)=> {
//     return res.end('Hello World!')
// })



app.use('/todo', todoRoutes)
app.use('/auth', userAuthRoutes )




app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port!`)
})


