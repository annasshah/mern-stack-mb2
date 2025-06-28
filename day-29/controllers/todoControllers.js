import { addTodo, readTodos, RemoveTodo, updateTodo } from "../utils/todoFunctions.js"

export const getTodos = async (req, res) => {
    const userId = req.userId
    const dataList = await readTodos(userId)
    return res.json({ data: dataList, success: true })
}


export const postTodo = (req, res) => {
    const bodyData = req.body
    const userId = req.userId
    addTodo({...bodyData, userId})
    // return res.status(400).json({ success: true })
    return res.json({ success: true })
}

export const editTodo = (req, res) => {
    const id = +req.params.id
    const bodyData = req.body
    updateTodo(id, bodyData)
    return res.json({ success: true })
}
export const deleteTodo = (req, res) => {
    const id = +req.params.id
    RemoveTodo(id)
    return res.json({ success: true })
}