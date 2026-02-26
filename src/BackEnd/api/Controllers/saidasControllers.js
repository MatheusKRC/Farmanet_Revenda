const saidasServices = require('../Services/saidasServices');

const statusOk = 200;

const getAll = async (_req, res) => {
  const { message, status } = await saidasServices.getSaidas();
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
};

const getSaidasByCod = async (req, res) => {
  const {codigo} = req.body
  const {message, status} = await saidasServices.getSaidasByCod(codigo);
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
}

const postSaidas = async (req, res) => {
  const {body} = req
  console.log(body);
  const result = await saidasServices.postSaidas(body)
  if (result) {
    return res.status(200).json(result);
  }
  return res.status(statusOk).json(result);
}

const patchSaidas = async (req, res) => {
  const {body} = req
  const {message, status} = await saidasServices.patchSaidas(body, body.codigo)
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
}

const destroySaidas = async (req, res) => {
    const {message, status} = await saidasServices.deleteAllSaidas()
    if (status) {
      return res.status(status).json(message);
    }
    return res.status(statusOk).json(message);
  }

module.exports = {
    getAll, getSaidasByCod, postSaidas, patchSaidas, destroySaidas
}