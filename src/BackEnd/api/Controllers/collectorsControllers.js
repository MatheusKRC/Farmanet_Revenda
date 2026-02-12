const collectorServices = require('../Services/collectorsServices');

const statusOK = 200;

const getAllCollectors = async (req, res) => {
  const { message, status } = await collectorServices.getAllCollectors();

  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOK).json(message);
};

module.exports = {
  getAllCollectors,
};
