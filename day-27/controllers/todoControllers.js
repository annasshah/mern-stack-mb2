import { addTodo, readTodos, RemoveTodo, updateTodo } from "../utils/todoFunctions.js"

export const getTodos = async (req, res) => {
    const dataList = await readTodos()
    return res.json({ data: dataList, success: true })
}


export const postTodo = (req, res) => {
    const bodyData = req.body
    addTodo(bodyData)
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