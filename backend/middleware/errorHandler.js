export const errorHandler = (err, req, res, next) => {

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((e) => e.message);
    err.message = message;
  }

  if (err.name === "CastError") {
    const message = `Invalid ${err.path}: ${err.value}`;
    err.message = message;
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const message = `${field} already taken`;
    err.message = message;
  }

  res.json({
    success: false,
    message: err.message || "Internal Server Error",
  });
  
};