/**
 * Created by carlos.matheu on 28/12/2015.
 * This pattern implements a single object (the subject)
 * that maintains a reference to a collection of objects (known as "observers")
 * and broadcasts notifications when a change to state occurs.
 * When we don't want to observe an object, we simply remove it from the collection of objects being observed.
 *
 * Advantages
 *  Requires deeper-level thinking of the relationship between the various components of an application
 *  Helps us pinpoint dependencies
 *  Excellent at decoupling objects which often promotes smaller, reusable components
 *
 * Disadvantages
 *  Checking the integrity of your application can become difficult
 *  Switching a subscriber from one publisher to another can be costly
 *
 * https://carldanley.com/js-observer-pattern/
 */

'use strict';

var Subject = (function () {

    function Subject() {
        this._list = [];
    }

    // this method will handle adding observers to the internal list
    Subject.prototype.observe = function observeObject(obj) {
        console.log('added new observer');
        this._list.push(obj);
    };

    // this method will handle removing observers to the internal list
    Subject.prototype.unobserve = function unobserveObject(obj) {
        for (var i = 0, len = this._list.length; i < len; i++) {
            if (this._list[i] === obj) {
                this._list.splice(i, 1);
                console.log('removed existing observer');
                return true;
            }
        }
        return false;
    };

    Subject.prototype.notify = function notifyObservers() {
        // Method delegation: borrow the slice method from Array
        // to create a new Array based on function arguments
        var args = [].slice.call(arguments, 0);
        for (var i = 0, len = this._list.length; i < len; i++) {
            this._list[i].update.apply(null, args);
        }
    };

    return Subject;

}());


// fetch stocks
function StockGrabber() {
    var subject = new Subject();

    this.addObserver = function addObserver(newObserver) {
        subject.observe(newObserver);
    };

    this.removeObserver = function removeObserver(observer) {
        subject.unobserve(observer);
    };

    this.fetchStocks = function fetchStocks() {
        var stocks = {
            aap: 165.00,
            goog: 243.65,
            msft: 99.34
        };

        subject.notify(stocks);
    };

}

// define a couple of different observers
var StockUpdaterComponent = {
    name: 'stockUpdaterComponent',
    update: function () {
        console.log('"update" called on StockUpdater with: ', arguments);
    }
}, StockChartsComponent = {
    name: 'StockChartsComponent',
    update: function () {
        console.log('"update" called on StockCharts with: ', arguments);
    }
};

//example
var stockApp = new StockGrabber();
stockApp.addObserver(StockUpdaterComponent);
stockApp.fetchStocks();
stockApp.addObserver(StockChartsComponent);
stockApp.fetchStocks();
stockApp.removeObserver(StockUpdaterComponent);
stockApp.fetchStocks();
stockApp.removeObserver(StockChartsComponent);
stockApp.fetchStocks();
