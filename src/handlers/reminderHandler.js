import { getReminder, createReminder, removeReminder } from "../services/reminderService"
import { successHandler, errorHandler } from '../middleware/responseHandlers'

export const getReminderList = async (req, res) => {
    try {
        const data = await getReminder()
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}
export const insertReminder = async (req, res) => {
    try {
        const data = await createReminder(req.body)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}
export const deleteReminder = async (req, res) => {
    try {
        const data = await removeReminder(req.params)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}