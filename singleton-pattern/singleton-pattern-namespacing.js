/**
 * Created by carlos.matheu on 21/01/2016.
 */
/*
 Namespacing with the singleton
 In JavaScript, namespacing is done by adding objects as properties of another object, so that it is one or more layers deep.
 This is useful for organizing code into logical sections.
 While the YUI JavaScript library does this to a degree that I feel is nearly excessive with numerous levels of namespacing,
 in general it is considered best practice to limit nesting namespaces to only a few lavels or less. The code below is an example of namespacing.

 http://www.adobe.com/devnet/archive/html5/articles/javascript-design-patterns-pt1-singleton-composite-facade.html
 */
var Namespace = {
    Util: {
        util_method1: function () {
        },
        util_method2: function () {
        }
    },
    Ajax: {
        ajax_method: function () {
        }
    },
    some_method: function () {
    }
};

// Here's what it looks like when it's used
Namespace.Util.util_method1();
Namespace.Ajax.ajax_method();
Namespace.some_method();