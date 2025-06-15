import express from 'express'
import todoRoutes from './routes/todoRoutes.js'

const app = express()
const PORT = 8000
app.use(express.json())

// app.get('/', (req, res)=> {
//     return res.end('Hello World!')
// })



app.use('/todo', todoRoutes)




app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port!`)
})