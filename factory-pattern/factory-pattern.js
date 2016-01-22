/**
 * Created by carlos.matheu on 22/01/2016.
 */
/*
 This pattern focuses on object creation but differs from other patterns in the creation category
 in that it does not require a constructor function.
 The factory pattern generally supplies an interface for developers
 to create new objects through the use of the factory rather than invoking the new operator on an object.

 Advantages

 Makes complex object creation easy through an interface that can bootstrap this process for you
 Great for generating different objects based on the environment
 Practical for components that require similar instantiation or methods
 Great for decoupling components by bootstrapping the instantiation of a different object to carry out work for particular instances

 Disadvantages

 Unit testing can be difficult as a direct result of the object creation process being hidden by the factory methods

 https://carldanley.com/js-factory-pattern/

 */

'use strict';

function CarDoor(options) {
    this.color = options.color || 'red';
    this.side = options.side || 'right';
    this.hasPowerWindows = options.hasPowerWindows || true;
}

function CarSeat(options) {
    this.color = options.color || 'gray';
    this.material = options.material || 'leather';
    this.inReclinable = options.isReclinable || true;
}

function CarPartFactory() {
}

CarPartFactory.prototype.createPart = function createCarPart(options) {
    var parentClass = null;

    if (options.partType === 'door') {
        parentClass = CarDoor;
    } else if (options.partype === 'seat') {
        parentClass = CarSeat;
    }

    if (parentClass === null) {
        return false;
    }

    return new parentClass(options);
}

var myPartFactory = new CarPartFactory();
var myseat = myPartFactory.createPart({
    partType: 'seat',
    material: 'leather',
    color: 'blue',
    isReclinable: false
});

console.log(myseat instanceof CarSeat);
console.log(myseat);