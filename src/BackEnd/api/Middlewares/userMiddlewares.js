/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable camelcase */
const userServices = require('../Services/userServices');
const { validateEmail, validatePassword, validateEspecialC, validateUpperLow, validateCnpj } = require('../Utils/validateRegex');

const register = async (req, res, next) => {
  const { user_email, user_password, username, company_name, cnpj } = req.body;
  const { status } = await userServices.findUser('username', username);
  const findCompany = await userServices.findUser('company_name', company_name);

  if (!user_email || !user_password || !username || !company_name || !cnpj) {
    return res.status(400).json({ message: 'All Fields must be filled' });
  }
  if (!status) {
    return res.status(400).json({ message: 'username already exist' });
  }
  if (!findCompany.status) {
    return res.status(400).json({ message: 'company already exist' });
  }

  return next();
};

const emailValidate = async (req, res, next) => {
  const { user_email } = req.body;

  const { status } = await userServices.findUser('user_email', user_email);

  if (!status) {
    return res.status(400).json({ message: 'email already exist' });
  }
  if (!validateEmail(user_email)) {
    return res.status(400).json({ message: 'Invalid Email' });
  }

  return next();
};

const passwordValidate = async (req, res, next) => {
  const { user_password } = req.body;

  if (!validatePassword(user_password)) {
    return res.status(400).json({ message: 'Password Must Have 8 Characters' });
  }
  if (!validateUpperLow(user_password)) {
    return res.status(400).json({ message: 'Password Must Have uppercase and lowercase letters' });
  }
  if (!validateEspecialC(user_password)) {
    return res.status(400).json({ message: 'Password Must Have especial characters and numbers' });
  }

  return next();
};

const cnpjValidate = async (req, res, next) => {
  const { cnpj } = req.body;
  const { status } = await userServices.findUser('cnpj', cnpj);

  if (!validateCnpj(cnpj)) {
    return res.status(400).json({ message: 'Cnpj Invalid' });
  }
  if (!status) {
    return res.status(400).json({ message: 'Cnpj already exist' });
  }
  return next();
};

module.exports = {
  register,
  emailValidate,
  passwordValidate,
  cnpjValidate,
};
