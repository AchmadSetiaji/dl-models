var validate = require('./validator').core;

it("#01. Accessories should valid", function(){
    var Accessories = require('../src/core/accessories');
    validate.accessories(new Accessories());
})