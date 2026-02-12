/* eslint-disable radix */
/* eslint-disable camelcase */
const { Collectors } = require('../../Database/models');

const getAllCollectors = async () => {
  const allCollectors = await Collectors.findAll();

  if (!allCollectors) {
    return { message: 'Cannot get Collectors', status: 400 };
  }
  return { message: allCollectors, status: null };
};


module.exports = {
  getAllCollectors };
