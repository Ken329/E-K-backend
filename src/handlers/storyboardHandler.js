import { successHandler, errorHandler } from '../middleware/responseHandlers';
import { getStoryboard, createStoryboard } from '../services/storyboardService';

export const getStoryboardHandler = async (req, res) => {
  try {
    const data = await getStoryboard();
    successHandler(res, 201, data);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};
export const insertStoryboardHandler = async (req, res) => {
  try {
    const data = await createStoryboard(req.body);
    successHandler(res, 201, data);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};
