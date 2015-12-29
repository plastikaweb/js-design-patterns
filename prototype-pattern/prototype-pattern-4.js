/**
 * Created by carlos.matheu on 29/12/2015.
 *
 * http://addyosmani.com/resources/essentialjsdesignpatterns/book/#prototypepatternjavascript
 */
'use strict';

var vehicleProto = {

    init: function(model) {
        this.model = model;
    },

    getModel: function() {
        console.log('The model is ' + this.model);
    }
};

function vehicle(model) {
    function F() {}
    F.prototype = vehicleProto;

    var f = new F();
    f.init(model);
    return f;
}

var car = vehicle('seat');
car.getModel();