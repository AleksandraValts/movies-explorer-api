const jwt = require('jsonwebtoken');
const Unauthorized = require('../errors/Unauthorized (401)');

const { JWT_SECRET } = require('../utils/dotenv');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const extractBearerToken = 'Bearer ';
  if (!authorization || !authorization.startsWith(extractBearerToken)) {
    throw new Unauthorized('Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new Unauthorized('Необходима авторизация'));
  }
  req.user = payload;
  return next();
};
