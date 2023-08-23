const { CustomAPIError } = require('../errors/custom-error');

const errorHandlerMiddleware = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).json({ error: error.message })
  }

  return res.status(500).json({ error: error.message })
}

module.exports = errorHandlerMiddleware;
