import { Todo } from "../models/Todo.js"

export const getTodos = async (req, res) => {

    try {
        const userId = req.userId
        // const dataList = await readTodos(userId)
        const dataList = await Todo.find({ userId })
        return res.json({ data: dataList, success: true })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })

    }
}


export const postTodo = async (req, res) => {
    try {
        const bodyData = req.body
        const userId = req.userId
        // addTodo({...bodyData, userId})
        await Todo.create(
            { ...bodyData, userId }
        )
        return res.json({ success: true })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })

    }
}

export const editTodo = async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.userId
        const bodyData = req.body
        // updateTodo(id, bodyData)

        const findTodo = await Todo.findOne({ _id: id, userId })

        if (!findTodo) {
            return res.status(404).json({ success: false, message: "Data not found against the given id!" })
        }

        const dataObj = {}
        if (bodyData.title) {
            dataObj.title = bodyData.title
        }
        if (bodyData.description) {
            dataObj.description = bodyData.description
        }

        const resData = await Todo.findByIdAndUpdate(id, {
            ...dataObj
        }, { new: true })

        return res.json({ success: true, message: 'Updated successfully', data: resData })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })

    }
}
export const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.userId
        // RemoveTodo(id)
        const findTodo = await Todo.findOne({ _id: id, userId })

        if (!findTodo) {
            return res.status(404).json({ success: false, message: "Data not found against the given id!" })
        }

        await Todo.findByIdAndDelete(id)

        return res.json({ success: true, message: "Deleted successfully!" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })

    }
}


export const getTodosForAdmin = async (req, res) => {

    try {
        const data = await Todo.find().populate({
            path:'userId',
            select:'username email'
        })

        return res.json({succcess: true, data})

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })

    }


}