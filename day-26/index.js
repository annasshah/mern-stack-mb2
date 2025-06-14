const express = require('express')
const path = require('node:path')
const fs = require('node:fs')
const app = express()
const PORT = 8000

app.use(express.json())


const filePath = path.join(__dirname, 'data/todos.json')

// console.log(filePath)


const readTodos = () => {
    // return await fs.readFile(filePath, 'utf-8', (err, data) => {
    //     if (err) {
    //         console.error(err);
    //         return null;
    //     }
    //     console.log(data, err)
    //     return JSON.parse(data)
    // });

    // ---- it blocks the thread ----
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
}


// console.log(readTodos())

const addTodo = (todo) => {
    const todoList = readTodos()
    console.log(todoList)
    const newTodo = { ...todo, id: todoList.length + 1 }
    todoList.push(newTodo)
    const stringifyData = JSON.stringify(todoList)
    fs.writeFileSync(filePath, stringifyData, 'utf-8')

    // return await fs.writeFile(filePath, stringifyData, err => {
    //     if (err) {
    //         return false
    //     }
    //     return true

    // });
}



// app.get('/', (req, res)=> {
//     return res.end('Hello World!')
// })


app.get('/todos', (req, res)=> {
    const dataList = readTodos()
    return res.json({data: dataList})
})

// app.put('/todo/2', (req, res)=> {
//     const dataList = readTodos()
//     return res.json({data: dataList})
// })


app.post('/todo', (req, res) => {
    const bodyData = req.body

    addTodo(bodyData)

    return res.json({ success: true })
})



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port!`)
})