const data = require('../shared/product-data');

module.exports = async function (context, req) {
  try {
    const productsData = data.getProducts(id);
    context.res.status(200).json(productsData);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
