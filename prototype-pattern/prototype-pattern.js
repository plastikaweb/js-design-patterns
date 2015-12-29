/**
 * Created by carlos.matheu on 29/12/2015.
 *
 * The prototype pattern focuses on creating an object that can be used
 * as a blueprint for other objects through prototypal inheritance.
 * This pattern is inherently easy to work with in JavaScript
 * because of the native support for prototypal inheritance in JS
 * which means we don't need to spend time or effort imitating this topology.
 *
 * Advantages
 *  New objects created from the "skeleton" of an existing object inherit references to existing functions on the prototype chain, thus boosting performance and keeping memory footprints to a minimum.
 *  Great for an application where the focus is on object creation
 *
 * Disadvantages
 *  Overkill for a project that uses very few objects and/or does not have an underlying emphasis on the extension of prototype chains
 *
 * https://carldanley.com/js-prototype-pattern/
 */
'use strict';

//build print
var MyBluePrint = function MyBluePrintObject() {

    this.aFunction = function aFunction() {
        console.log('a function');
    };

    this.anotherFunction = function anotherFunction() {
        console.log('another function');
    };

    this.showMyName = function showMyName() {
        console.log(this.name);
    };

};

function MyObject() {
    this.name = 'mary';
}

MyObject.prototype = new MyBluePrint();

//example
var test = new MyObject();
test.aFunction();
test.anotherFunction();
test.showMyName();

