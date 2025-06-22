import fs from 'fs'
import path, {dirname}  from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'data/users.json')



export const readUsers = async() => {
    const response =  await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(response)
}

export const addUser = async (user) => {
    const usersList = await readUsers()
    const newUser = { ...user, id: usersList.length + 1 }
    usersList.push(newUser)
    const stringifyData = JSON.stringify(usersList)
    await fs.promises.writeFile(filePath, stringifyData, 'utf-8');
}

export const getUserByEmail = async (email) => {
    const usersList = await readUsers()
    const user = usersList.find((user)=>user.email === email.toLowerCase())
    return user
}

// export const updateTodo = async (id, payload) => {
//     const todoList = await readTodos()
//     const findTodo = todoList.find((todo)=> todo.id === id)
//     const idIndex = todoList.findIndex((todo)=> todo.id === id)

//     const updatedTodo = { ...findTodo, ...payload}
//     todoList[idIndex] = updatedTodo
//     const stringifyData = JSON.stringify(todoList)
//     await fs.promises.writeFile(filePath, stringifyData, 'utf-8');
// }


// export const RemoveTodo = async (id) => {
//     const todoList = await readTodos()
//     const filteredList = todoList.filter((todo)=> todo.id !== id)

//     const stringifyData = JSON.stringify(filteredList)
//     await fs.promises.writeFile(filePath, stringifyData, 'utf-8');
// }
