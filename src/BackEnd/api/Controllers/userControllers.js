const userServices = require('../Services/userServices');
const { jwtSign } = require('../Utils/jwt');

const statusOk = 200;

const getAll = async (_req, res) => {
  const { message, status } = await userServices.getUsers();
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
};

const findUser = async (req, res) => {
  const { id } = req.body;
  const { message, status } = await userServices.findUserById(id);
  if (status) {
    return req.status(status).json(message);
  }
  return res.status(statusOk).json(message);
};

const postUser = async (req, res) => {
  const { message, status } = await userServices.createUser(req.body);

  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
};

const login = async (req, res) => {
  console.log(req.body);
  const { message, status } = await userServices.login(req.body);
  if (status) {
    return res.status(status).json(message);
  }

  const token = await jwtSign(message);

  return res.status(statusOk).json({ message, token });
};

const patchUser = async (req, res) => {
  const { id, key, value } = req.body;
  const { message, status } = await userServices.updateUser(id, key, value);

  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  const { message, status } = await userServices.deleteUser(id);

  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
};

module.exports = {
  getAll, postUser, patchUser, findUser, deleteUser, login };
