export const errorHandler = (res, statusCode, message) => {
  res.status(statusCode).send({ success: false, message });
};

export const successHandler = (res, statusCode, data) => {
  res.status(statusCode).send({ success: true, data });
};
