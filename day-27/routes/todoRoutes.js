import { Router } from "express";
import { deleteTodo, editTodo, getTodos, postTodo } from "../controllers/todoControllers.js";
const router = Router()



router.get('/', getTodos)
router.post('/', postTodo)
router.put('/:id', editTodo)
router.delete('/:id', deleteTodo)


export default router
// module.exports = router