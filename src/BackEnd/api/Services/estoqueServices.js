const { Estoque } = require('../../Database/models');

const getEstoque = async () => {
    const estoque = await Estoque.findAll()
  
    if (!estoque) {
      return { message: 'estoque not Found', status: 404 };
    }
    return { message: estoque, status: null };
  };

const getEstoqueByCod = async (codigo) => {
  const estoque = await Estoque.findOne({
    where: {codigo},
  })

  if (!estoque) {
    return { message: 'estoque not Found', status: 404 };
  }
  return { message: estoque, status: null };
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