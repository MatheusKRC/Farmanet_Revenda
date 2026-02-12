const { Products } = require('../../Database/models');

const getProducts = async () => {
    const products = await Products.findAll()
  
    if (!products) {
      return { message: 'Products not Found', status: 404 };
    }
    return { message: products, status: null };
  };

const getProductByCod = async (codigo) => {
  const product = await Products.findOne({
    where: {codigo},
  })

  if (!product) {
    return { message: 'Product not Found', status: 404 };
  }
  return { message: product, status: null };
}

const postProducts = async (file) => {
  const postData = await Products.bulkCreate(file)
  return postData
}

const patchProducts = async (product, codigo) => {
  const updateProduct = await Products.update(product, {where : { codigo }})
  if (!updateProduct) {
    return { message: 'Product not Found', status: 404 };
  }
  return { message: updateProduct, status: null };
}

module.exports = {
    getProducts, getProductByCod, postProducts, patchProducts
}