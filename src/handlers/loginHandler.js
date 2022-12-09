import { login } from "../services/loginService"
import { successHandler, errorHandler } from '../middleware/responseHandlers'

export const loginHandler = async (req, res) => {
    try {
        const data = await login(req.body)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}