const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
   expiresIn: '7d',
   algorithm: 'HS256' };

const createToken = async ({ displayName, email }) => {
  const payload = { displayName, email };
  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

const err = {
  statusCode: UNAUTHORIZED,
  message: 'Expired or invalid token',
};

const verifyToken = rescue(async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(UNAUTHORIZED).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({ where: { email: decoded.email } });
    if (!user) return next(err);
    req.user = user;
    next();
  } catch (e) {
    next(err); 
  }
});

module.exports = {
  createToken,
  verifyToken,
};