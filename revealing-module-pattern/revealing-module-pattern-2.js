'use strict';

var calculator = function(eq) {
    //private
    var eqCtl = document.getElementById(eq),
    add = function(x, y) {
        var result = x + y;
        eqCtl.innerHTML = result;
        console.log(result);
    },
    substract = function(x, y) {
        var result = x - y;
        eqCtl.innerHTML = result;
        console.log(result);
    }
    //public
    return {
        add: add,
        substract: substract
    };
}('output');

calculator.add(3,2);