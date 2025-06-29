import fs from 'fs'
import path, {dirname}  from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'data/todos.json')
import { v4 as uuidv4 } from 'uuid';



export const readTodos = async(userId) => {
    const response =  await fs.promises.readFile(filePath, 'utf-8');
    const parsedData = JSON.parse(response)
    return userId ? parsedData.filter((todo)=>todo.userId === userId) : parsedData
}

export const addTodo = async (todo) => {
    const todoList = await readTodos()
    console.log(todoList)
    const newTodo = { ...todo, id: uuidv4() }
    todoList.push(newTodo)
    const stringifyData = JSON.stringify(todoList)
    await fs.promises.writeFile(filePath, stringifyData, 'utf-8');
}

export const updateTodo = async (id, payload) => {
    const todoList = await readTodos()
    const findTodo = todoList.find((todo)=> todo.id === id)
    const idIndex = todoList.findIndex((todo)=> todo.id === id)

    const updatedTodo = { ...findTodo, ...payload}
    todoList[idIndex] = updatedTodo
    const stringifyData = JSON.stringify(todoList)
    await fs.promises.writeFile(filePath, stringifyData, 'utf-8');
}


export const RemoveTodo = async (id) => {
    const todoList = await readTodos()
    const filteredList = todoList.filter((todo)=> todo.id !== id)

    const stringifyData = JSON.stringify(filteredList)
    await fs.promises.writeFile(filePath, stringifyData, 'utf-8');
}
