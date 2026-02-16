export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  const code = err.code || 'INTERNAL_ERROR';

  console.error(`[ERROR] ${code}:`, message);

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      code
    }
  });
};
