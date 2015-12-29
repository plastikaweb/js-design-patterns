/**
 * Created by carlos.matheu on 29/12/2015.
 *
 * real prototypal inheritance, as defined in the ECMAScript 5 standard,
 * requires the use of Object.create (which we previously looked at earlier in this section).
 * To remind ourselves, Object.create creates an object which has a specified prototype
 * and optionally contains specified properties as well (e.g Object.create( prototype, optionalDescriptorObjects )).
 *
 * http://addyosmani.com/resources/essentialjsdesignpatterns/book/#prototypepatternjavascript
 */
'use strict';

var myCar = {
    name: 'Renault 3',
    drive: function () {
        console.log('I am driving');
    },
    panic: function () {
        console.log('how do you stop this thing?');
    }
};

var yourCar = Object.create(myCar, {
    'year': {
        value: 2002,
        enumerable: true
    }
});

console.log(yourCar);