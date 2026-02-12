/* eslint-disable camelcase */
/* eslint-disable max-len */
const jwt = require('jsonwebtoken');
const fs = require('fs/promises');

const filePath = 'src/BackEnd/jwt.evaluation.key';

const SECRET_KEY = () => fs.readFile(filePath, 'utf-8', (_err, data) => JSON.stringify(data));
const staturErr = 401;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256', 
};

const jwtSign = async ({ id, username, user_email }) => jwt.sign({ id, username, user_email }, await SECRET_KEY(), jwtConfig);

const jwtValidate = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(staturErr).json({ message: 'Token not found' });

  try {
    jwt.verify(token, await SECRET_KEY());
    // req.user = decoded.userId;
    next();
  } catch (error) {
    return res.status(staturErr).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  jwtSign,
  jwtValidate,
};
