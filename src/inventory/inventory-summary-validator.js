require("should");
var validateUom = require('../master/uom-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('productCode');
    data.productCode.should.instanceof(String);

    data.should.have.property('productName');
    data.productName.should.be.String();


    data.should.have.property('storageId');
    data.storageId.should.instanceof(Object);

    data.should.have.property('storageCode');
    data.storageCode.should.instanceof(String);

    data.should.have.property('storageName');
    data.storageName.should.be.String();

    data.should.have.property('quantity');
    data.quantity.should.instanceOf(Number);

    // data.should.have.property('secondQuantity');
    // data.secondQuantity.should.instanceOf(Number);

    // data.should.have.property('thirdQuantity');
    // data.thirdQuantity.should.instanceOf(Number);

    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    // data.should.have.property('secondUomId');
    // data.secondUomId.should.instanceof(Object);

    // data.should.have.property('thirdUomId');
    // data.thirdUomId.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.be.String();

    // data.should.have.property('secondUom');
    // data.secondUom.should.be.String();

    // data.should.have.property('thirdUom');
    // data.thirdUom.should.be.String();
};