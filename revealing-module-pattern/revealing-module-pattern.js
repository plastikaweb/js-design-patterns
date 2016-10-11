/**
 * Created by carlos.matheu on 22/12/2015.
 * https://carldanley.com/js-revealing-module-pattern/
 */
'use strict';

var MyModule = (function () {

    function priv1() {
        return 1;
    }

    function pub1() {
        return 2;
    }

    function testpub() {
        return pub1() * 2;
    }

    return {
        doPriv: priv1,
        pub1: pub1,
        testpub: testpub
    }

}());

//works just fine
console.log(MyModule.doPriv());
//so will this
console.log(MyModule.pub1());
//not a fail!
console.log(MyModule.testpub());