const ProductErrors = require('./product.errors');

describe('ProductErrors', () => {
  test('should be an object', () => {
    expect(ProductErrors).toBeInstanceOf(Object);
  });

  describe('ProductMissingParams', () => {
    test('should exist and extend from Error', () => {
      expect(new ProductErrors.ProductMissingParams()).toBeInstanceOf(Error);
    });

    test('should define a default message', () => {
      const err = new ProductErrors.ProductMissingParams();
      expect(err.message).toEqual('Faltan campos del producto');
    });

    test('should allow passing a custom message', () => {
      const err = new ProductErrors.ProductMissingParams('CustomMessage');
      expect(err.message).toEqual('CustomMessage');
    });
  });

  describe('ProductMissingUpdate', () => {
    test('should exist and extend from Error', () => {
      expect(new ProductErrors.ProductMissingUpdate()).toBeInstanceOf(Error);
    });

    test('should define a default message', () => {
      const err = new ProductErrors.ProductMissingUpdate();
      expect(err.message).toEqual('Falta el precio del producto');
    });

    test('should allow passing a custom message', () => {
      const err = new ProductErrors.ProductMissingUpdate('CustomMessage');
      expect(err.message).toEqual('CustomMessage');
    });
  });

  describe('ProductNotFound', () => {
    test('should exist and extend from Error', () => {
      expect(new ProductErrors.ProductNotFound()).toBeInstanceOf(Error);
    });

    test('should define a default message', () => {
      const err = new ProductErrors.ProductNotFound();
      expect(err.message).toEqual('No existe el producto');
    });

    test('should allow passing a custom message', () => {
      const err = new ProductErrors.ProductNotFound('CustomMessage');
      expect(err.message).toEqual('CustomMessage');
    });
  });
});
