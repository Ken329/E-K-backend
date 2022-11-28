import { todoService } from "../services/todoService"

export const todoHandler = async (req, res, next) => {
    try {
        const result = await todoService()
        res.status(200).json({ list: result })
    } catch (error) {
        next(error.message)
    }
}