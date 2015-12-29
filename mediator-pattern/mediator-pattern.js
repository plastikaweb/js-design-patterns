/**
 * Created by carlos.matheu on 29/12/2015.
 * implements a single object that becomes a shared resource through all of the different pieces of an application.
 *
 * Advantages
 *  Reduces the communication relationship from "many-to-many" to "many-to-one"
 *  Helps us pinpoint dependencies
 *  Excellent at decoupling objects which often promotes smaller, reusable components
 *
 * Disadvantages
 *  Introduces a single point of failure
 *  When modules communicate back and forth using a mediator pattern, it tends to become cumbersome and usually results in a clear performance hit. It's best when the mediator is only used to coordinate actions across multiple features and not for communication within the individual features themselves; keep the airways clean!
 *
 * https://carldanley.com/js-mediator-pattern/
 */

'use strict';

var Mediator = (function () {

    function Mediator() {
        this._topics = {};
    }

    Mediator.prototype.subscribe = function mediatorSubscribe(topic, callback) {
        if (!this._topics.hasOwnProperty(topic)) {
            this._topics[topic] = [];
        }

        this._topics[topic].push(callback);
        return true;
    };

    Mediator.prototype.unsubscribe = function mediatorUnsubscribe(topic, callback) {
        if (!this._topics.hasOwnProperty(topic)) {
            return false;
        }

        for (var i = 0, len = this._topics[topic].length; i < len; i++) {
            if (this._topics[topic][i] === callback) {
                this._topics[topic].splice(i, 1);
                return true;
            }
        }

        return false;
    };

    Mediator.prototype.publish = function mediatorPublish() {
        var args = [].slice.call(arguments, 0),
            topic = args.shift();

        if (!this._topics.hasOwnProperty(topic)) {
            return false;
        }

        for (var i = 0, len = this._topics[topic].length; i < len; i++) {
            this._topics[topic][i].apply(null, args);
        }

        return true;
    };

    return Mediator;

}());

var Subscriber = function ExampleSubscriber(myVar) {
    console.log(myVar);
};
var Subscriber2 = function ExampleSubscriber2(myVar) {
    console.log(myVar + ' hello');
}

var myMediator = new Mediator();
myMediator.subscribe('click', Subscriber);
myMediator.subscribe('click', Subscriber2);
myMediator.subscribe('rollover', Subscriber);
myMediator.publish('click', 'you have a click event!');
myMediator.publish('click', 'you have a second click callback!');
myMediator.publish('rollover', 'a rollover event!');