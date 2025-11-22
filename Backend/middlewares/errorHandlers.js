// middlewares/errorHandler.js
function errorHandler(err, req, res, next) {
  console.error(err); // replace with logger in prod

  const status = err.status || 500;
  const code = err.code || (status === 500 ? 'INTERNAL_ERROR' : 'ERROR');

  res.status(status).json({
    success: false,
    error: {
      message: err.message || 'Internal Server Error',
      code,
    },
  });
}

module.exports = { errorHandler };
