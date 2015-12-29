/**
 * Created by carlos.matheu on 29/12/2015.
 */
'use strict';

var Utils = function (arr) {
    this.arrObj = arr;
    this.result = 0;
};

var Proto = function () {

    var show = function show() {
        return this.result;
    };

    this.add = function add() {
        var len = this.arrObj.length;
        while (len--) {
            this.result += parseInt(this.arrObj[len], 10);
        }
        return show.call(this);
    };

    return {
        add: this.add
    };

};

Utils.prototype = new Proto();

var testUtils = new Utils([20, 10, 40]);
console.log(testUtils.add());
