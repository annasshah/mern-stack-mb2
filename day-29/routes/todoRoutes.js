import { Router } from "express";
import { deleteTodo, editTodo, getTodos, postTodo } from "../controllers/todoControllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = Router()



router.get('/', authMiddleware, getTodos)
router.post('/', authMiddleware, postTodo)
router.put('/:id', authMiddleware, editTodo)
router.delete('/:id', authMiddleware, deleteTodo)


export default router
// module.exports = router