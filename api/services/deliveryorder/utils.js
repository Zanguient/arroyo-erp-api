const { ProductModel, PriceModel } = require('arroyo-erp-models');

/**
 * Calcula los totales del albarán
 * @param deliveryOrder
 */
const calcData = deliveryOrder => {
  const size = deliveryOrder.products.length;
  let ivaDO = 0;
  let reDO = 0;
  let totalDO = 0;
  let taxBaseDO = 0;
  let rateDO = 0;

  deliveryOrder.products.forEach(({
    iva, re, total, taxBase, rate,
  }) => {
    ivaDO += iva;
    reDO += re;
    totalDO += total;
    taxBaseDO += taxBase;
    if (rate) rateDO += rate;
  });

  deliveryOrder.set('size', size);
  deliveryOrder.set('iva', ivaDO);
  deliveryOrder.set('re', reDO);
  deliveryOrder.set('total', totalDO);
  deliveryOrder.set('taxBase', taxBaseDO);
  deliveryOrder.set('rate', rateDO);
  deliveryOrder.save();
  return deliveryOrder;
};

/**
 * Calcula los datos de un producto del albarán
 * @param {string} product
 * @param {string | number} price
 * @param {string | number} quantity
 * @param {Number} date
 * @return {Promise<{product: *, total: number, code: *, quantity: number, re: number,
 * iva: number, price: number, name: *, diff: number, taxBase: number}>}
 */
const calcProduct = async (product, price, quantity, date = 0) => {
  const {
    name, iva, re, code, rate,
  } = await ProductModel.findOne({ _id: product });

  const prices = await PriceModel.find({ product, date: { $gt: 0, $lt: date } }).sort({ date: -1 });
  console.log(prices);
  const lastPrice = prices.length ? prices[0].price : 0;

  const rateCalc = rate ? rate * quantity : 0;
  const taxBase = quantity * price + rateCalc;
  const ivaTotal = taxBase * iva;
  const reTotal = taxBase * re;

  return {
    code,
    product,
    price: Number(price),
    quantity: Number(quantity),
    name,
    taxBase,
    ...(rate && { rate }),
    diff: price - lastPrice,
    iva: ivaTotal,
    re: reTotal,
    total: taxBase + ivaTotal + reTotal,
  };
};

module.exports = {
  calcData,
  calcProduct,
};
