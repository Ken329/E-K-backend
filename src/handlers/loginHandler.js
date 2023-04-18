import { successHandler, errorHandler } from '../middleware/responseHandlers';
import { login } from '../services/loginService';

export const loginHandler = async (req, res) => {
  try {
    const data = await login(req.body);
    successHandler(res, 201, data);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};
