const productsServices = require('../Services/productsServices');

const statusOk = 200;

const getAll = async (_req, res) => {
  const { message, status } = await productsServices.getProducts();
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
};

const getProductByCod = async (req, res) => {
  const {codigo} = req.body
  const {message, status} = await productsServices.getProductByCod(codigo);
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
}

const postProducts = async (req, res) => {
  const {body} = req
  console.log(body);
  const result = await productsServices.postProducts(body)
  if (result) {
    return res.status(200).json(result);
  }
  return res.status(statusOk).json(result);
}

const patchProducts = async (req, res) => {
  const {body} = req
  const {message, status} = await productsServices.patchProducts(body, body.codigo)
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
}

module.exports = {
    getAll, getProductByCod, postProducts, patchProducts
}