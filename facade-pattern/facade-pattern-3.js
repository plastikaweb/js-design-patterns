/**
 * Created by carlos.matheu on 21/01/2016.
 */
/*
 The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems.
 It is a simple pattern that may seem trivial but it is powerful and extremely useful.
 It is often present in systems that are built around a multi-layer architecture.

 The intent of the Façade is to provide a high-level interface (properties and methods)
 that makes a subsystem or toolkit easy to use for the client.

 On the server, in a multi-layer web application you frequently have a presentation layer which is a client to a service layer.
 Communication between these two layers takes place via a well-defined API. This API, or façade, hides the complexities of the business objects and their interactions from the presentation layer.

 Another area where Façades are used is in refactoring.
 Suppose you have a confusing or messy set of legacy objects that the client should not be concerned about.
 You can hide this code behind a Façade. The Façade exposes only what is necessary and presents a cleaner and easy-to-use interface.

 Façades are frequently combined with other design patterns. Facades themselves are often implemented as singleton factories.


 Participants
 The objects participating in this pattern are:

 Facade -- In sample code: Mortgage
 knows which subsystems are responsible for a request
 delegates client requests to appropriate subsystem objects
 Sub Systems -- In sample code: Bank, Credit, Background
 implements and performs specialized subsystem functionality
 have no knowledge of or reference to the facade

 http://www.dofactory.com/javascript/facade-design-pattern

 */
'use strict';

var Mortgage = function (name) {
    this.name = name;
};

Mortgage.prototype = {

    applyFor: function (amount) {
        var result = 'approved';
        if (!new Bank().verify(this.name, amount)) {
            result = 'denied';
        } else if (!new Credit().get(this.name)) {
            result = 'denied';
        } else if (!new Background().check(this.name)) {
            result = 'denied';
        }

        return this.name + ' has been ' + result +
            ' for a ' + amount + ' mortage';

    }
};

var Bank = function () {
        this.verify = function (name, amount) {
            //complex logic
            return true;
        }
    },
    Credit = function () {
        this.get = function (name) {
            //complex logic
            return true;
        }
    },

    Background = function () {
        this.check = function (name) {
            //complex logic
            return true;
        }
    };

var mortage = new Mortgage('Carlos Matheu');
console.log(mortage.applyFor(1000));

