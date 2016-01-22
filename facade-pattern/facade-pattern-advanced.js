/**
 * Created by carlos.matheu on 21/01/2016.
 */

'use strict';

var MyModule = (function (win) {

    function MyModule() {
        function someMethod() {
            console.log('some method');
        }

        function otherMethod() {
            console.log('other method');
        }

        return {

            // in our normal revealing module pattern, we'd do the following:
            // someMethod : someMethod,

            // in the facade pattern, we mask the internals so no one has direct access by doing this:
            someMethod: function() {
                someMethod();
            }

        }
    }

})(window);

MyModule.someMethod();