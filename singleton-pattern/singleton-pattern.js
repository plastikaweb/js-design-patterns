/**
 * Created by carlos.matheu on 28/12/2015.
 * This pattern restricts instantiation of an object to a single reference
 * thus reducing its memory footprint and allowing a "delayed" initialization on an as-needed basis.
 *
 * Advantages
 *  Reduced memory footprint
 *  Single point of access
 *  Delayed initialization that prevents instantiation until required
 *
 * Disadvantages
 *  Once instantiated, they're hardly ever "reset"
 *  Harder to unit test and sometimes introduces hidden dependencies
 *
 *  https://carldanley.com/js-singleton-pattern/
 **/

'use strict';

var mySingleton = (function () {

    var instance = null;

    function InitializeNewModule() {

        function myMethod() {
            console.log('my method');
        }

        function mySecondMethod() {
            console.log('my second method');
        }

        return {
            someMethod: myMethod,
            someOtherMethod: mySecondMethod
        };
    }

    function getInstance() {
        if(!instance) {
            instance = new InitializeNewModule();
        }
        return instance;
    }

    return {
        getInstance: getInstance
    }
}());

var single = mySingleton.getInstance();
single.someMethod();
single.someOtherMethod();

console.log(single);