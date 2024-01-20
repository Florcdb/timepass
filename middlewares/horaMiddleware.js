module.exports = (req, res, next) => {
    req.currentHour = new Date().getHours();
    next();
  };