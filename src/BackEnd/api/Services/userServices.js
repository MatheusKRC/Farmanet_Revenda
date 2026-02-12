/* eslint-disable camelcase */
const md5 = require('md5');
const { Users } = require('../../Database/models');

const user404 = 'User Not Found';

const getUsers = async () => {
  const users = await Users.findAll()

  if (!users) {
    return { message: 'Users not Found', status: 404 };
  }
  return { message: users, status: null };
};

const findUserById = async (id) => {
  const user = await Users.findOne(
    { where: { id },
    },
  );

  if (!user) {
    return { message: user404, status: 404 };
  }
  return { message: user, status: null };
};

const findUser = async (key, value) => {
  const user = await Users.findOne(
    {
      where: { [key]: value },
    },
  );

  if (!user) {
    return { message: user404, status: 404 };
  }
  return { message: user, status: null };
};

const createUser = async (body) => {
  const { user_password } = body;
  const newPassword = md5(user_password);
  body.user_password = newPassword;
  const newUser = await Users.create(body);

  if (!newUser) {
    return { message: 'Cannot create new user', status: 400 };
  }
  return { message: newUser, status: null };
};

const login = async (body) => {
  const { user_password, user_email } = body;

  const email = await findUser('user_email', user_email);
  const password = await findUser('user_password', md5(user_password));

  if (!email) {
    return { message: 'Email or password incorrect', status: 404 };
  }
  if (!password) {
    return { message: 'Email or password incorrect', status: 404 };
  }

  return { message: email, status: null };
};

const updateUser = async (id, key, value) => {
  const update = await Users.update(
    { [key]: value },
    { where: { id } },
  );
  if (!update) {
    return { message: user404, status: 404 };
  }
  return { message: await findUser(id), status: null };
};

const deleteUser = async (id) => {
  const delUser = await Users.destroy({ where: { id } });
  if (!delUser) {
    return { message: 'cannot delete user', status: 400 };
  }
  return { message: delUser, status: null };
};

module.exports = {
  getUsers, findUser, createUser, updateUser, findUserById, deleteUser, login };
