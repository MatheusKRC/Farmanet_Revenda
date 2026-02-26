const { Saidas } = require('../../Database/models');

const getSaidas = async () => {
    const saidas = await Saidas.findAll()
  
    if (!saidas) {
      return { message: 'Saidas not Found', status: 404 };
    }
    return { message: saidas, status: null };
  };

const getSaidasByCod = async (codigo) => {
  const saidas = await Saidas.findOne({
    where: {codigo},
  })

  if (!saidas) {
    return { message: 'Saidas not Found', status: 404 };
  }
  return { message: saidas, status: null };
}

const postSaidas = async (file) => {
  const postData = await Saidas.bulkCreate(file)
  return postData
}

const patchSaidas = async (saidas, codigo) => {
  const updateSaidas = await Saidas.update(saidas, {where : { codigo }})
  if (!updateSaidas) {
    return { message: 'Saidas not Found', status: 404 };
  }
  return { message: updateSaidas, status: null };
}

module.exports = {
    getSaidas, getSaidasByCod, postSaidas, patchSaidas
}