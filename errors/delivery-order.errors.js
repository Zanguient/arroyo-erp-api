class DeliveryOrderMissingId extends Error {
  /**
   * Create an instance
   *
   * @param {string} [msg=user invalid login] Message for the error
   */
  constructor(msg = 'Falta el id del albarán') {
    super(msg);
    this.name = this.constructor.name;
    this.code = 400;
  }
}

class DeliveryOrderMissing extends Error {
  /**
   * Create an instance
   *
   * @param {string} [msg=user invalid login] Message for the error
   */
  constructor(msg = 'Faltan parámetros') {
    super(msg);
    this.name = this.constructor.name;
    this.code = 400;
  }
}
class DeliveryOrderNotFound extends Error {
  /**
   * Create an instance
   *
   * @param {string} [msg=user invalid login] Message for the error
   */
  constructor(msg = 'El albarán no es válido') {
    super(msg);
    this.name = this.constructor.name;
    this.code = 422;
  }
}

class DeliveryOrderProviderNotFound extends Error {
  /**
   * Create an instance
   *
   * @param {string} [msg=user invalid login] Message for the error
   */
  constructor(msg = 'El proveedor no es válido') {
    super(msg);
    this.name = this.constructor.name;
    this.code = 422;
  }
}

module.exports = {
  DeliveryOrderMissingId,
  DeliveryOrderMissing,
  DeliveryOrderProviderNotFound,
  DeliveryOrderNotFound,
};
