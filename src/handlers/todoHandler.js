import { getTodo, createTodo, modifyTodo } from "../services/todoService"
import { successHandler, errorHandler } from '../middleware/responseHandlers'

export const getTodoList = async (req, res, next) => {
    try {
        const data = await getTodo()
        successHandler(res, 201, data)
    } catch (error) {
        next(error.message)
    }
}
export const insertTodo = async (req, res) => {
    try {
        const data = await createTodo(req.body)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}
export const updateTodo = async (req, res) => {
    try {
        const data = await modifyTodo(req.body)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}