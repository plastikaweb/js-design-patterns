/**
 * Combines prototype and revealing module
 * Modularize code into re-useable objects
 * variables/functions taken out of global namespace
 * expose only public members
 * functions loaded into memory once
 * extensible
 */
'use strict';

var Calculator = function (eq) {
    // variables
    this.eqCtl = document.getElementById(eq);
};

Calculator.prototype = function () {
    // functions
    var add = function (x, y) {
            var result = x + y;
            this.eqCtl.innerHTML = result;
            console.log(result);
        },
        substract = function (x, y) {
            var result = x - y;
            this.eqCtl.innerHTML = result;
            console.log(result);
        };
    return {
        // public members as revealing module pattern
        add: add,
        substract: substract
    };
}();