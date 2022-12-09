import { getMemory, getMemoryWithId, createMemory, modifyMemory, removeMemory } from "../services/memoryService"
import { successHandler, errorHandler } from '../middleware/responseHandlers'

export const getMemoryList = async (req, res) => {
    try {
        const data = await getMemory()
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}
export const getMemoryById = async (req, res) => {
    try {
        const data = await getMemoryWithId(req.body)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}
export const insertMemory = async (req, res) => {
    try {
        const data = await createMemory(req.body)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}
export const updateMemory = async (req, res) => {
    try {
        const data = await modifyMemory(req.body)
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}
export const deleteMemory = async (req, res) => {
    try {
        const data = await removeMemory({ ...req.params, ...req.body })
        successHandler(res, 201, data)
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}