const estoqueServices = require('../Services/estoqueServices');

const statusOk = 200;

const getAll = async (_req, res) => {
  const { message, status } = await estoqueServices.getestoque();
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
};

const getEstoqueByCod = async (req, res) => {
  const {codigo} = req.body
  const {message, status} = await estoqueServices.getEstoqueByCod(codigo);
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
}

const postEstoque = async (req, res) => {
  const {body} = req
  console.log(body);
  const result = await estoqueServices.postestoque(body)
  if (result) {
    return res.status(200).json(result);
  }
  return res.status(statusOk).json(result);
}

const patchEstoque = async (req, res) => {
  const {body} = req
  const {message, status} = await estoqueServices.patchestoque(body, body.codigo)
  if (status) {
    return res.status(status).json(message);
  }
  return res.status(statusOk).json(message);
}

module.exports = {
    getAll, getEstoqueByCod, postEstoque, patchEstoque
}