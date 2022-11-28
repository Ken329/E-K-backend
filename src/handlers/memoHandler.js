import { getMemo, createMemo, modifyMemo, removeMemo } from "../services/memoService"
import { successHandler, errorHandler } from '../middleware/responseHandlers'

export const getMemoList = async (req, res) => {
    try {
        const data = await getMemo()
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}
export const insertMemo = async (req, res) => {
    try {
        const data = await createMemo(req.body)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}
export const updateMemo = async (req, res) => {
    try {
        const data = await modifyMemo(req.body)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}
export const deleteMemo = async (req, res) => {
    try {
        const data = await removeMemo(req.params)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}