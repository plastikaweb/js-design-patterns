/**
 * Created by carlos.matheu on 22/12/2015.
 * https://carldanley.com/js-module-pattern/
 */
(function (win) {

    //private method
    function privateMethod() {
        return 'hello';
    }

    // normally variables & functions start with a lowercase letter but with modules, that is not the case.
    // The general tradition is to start them with a capital letter instead.
    function Module() {

        // `this` refers to the instance of `MyModule` when created
        this.myMethod = function myMethod() {
            console.log('my method ' + privateMethod());
        };

        // note that we still use a function declaration even when using a function expression.
        // for more information on why, check out: http://kangax.github.io/nfe/
        this.mySecondMethod = function mySecondMethod() {
            console.log('my second method');
        };
    }

    win.MyModule = Module;

}(window));

var myModule = new MyModule();
myModule.myMethod();
myModule.mySecondMethod();