const { Estoque } = require('../../Database/models');

const getEstoque = async () => {
    const Estoque = await Estoque.findAll()
  
    if (!Estoque) {
      return { message: 'Estoque not Found', status: 404 };
    }
    return { message: Estoque, status: null };
  };

const getEstoqueByCod = async (codigo) => {
  const Estoque = await Estoque.findOne({
    where: {codigo},
  })

  if (!Estoque) {
    return { message: 'Estoque not Found', status: 404 };
  }
  return { message: Estoque, status: null };
}

const postEstoque = async (file) => {
  const postData = await Estoque.bulkCreate(file)
  return postData
}

const patchEstoque = async (estoque, codigo) => {
  const updateEstoque = await Estoque.update(estoque, {where : { codigo }})
  if (!updateEstoque) {
    return { message: 'Estoque not Found', status: 404 };
  }
  return { message: updateEstoque, status: null };
}

module.exports = {
    getEstoque, getEstoqueByCod, postEstoque, patchEstoque
}