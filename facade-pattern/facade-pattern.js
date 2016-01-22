/**
 * Created by carlos.matheu on 21/01/2016.
 */
/*
 The purpose of the facade pattern is to conceal the underlying complexity of the code by using an anonymous function as an extra layer.
 Internal subroutines are never exposed but rather invoked through a facade which makes this pattern secure
 in that it never exposes anything to the developers working with it.
 The facade pattern is both extremely interesting and very useful for adding an extra layer of security to your already minified code.
 This pattern is extremely useful when coupled with the revealing module pattern.

 Advantages

 Enhances security for your web application
 Works well in combination with other patterns
 Easy to implement
 Makes it easy to patch internals
 Provides a simpler public interface
 Proven useful for other major libraries such as jQuery


 Disadvantages

 There aren't any real drawbacks as it provides a unified interface to a set of interfaces in a subsystem.
 As a result, you aren't forced to make any unwanted compromises, thus a win-win.
 One possible note worth mentioning is that a developer must decide whether the implicit cost of implementation
 is really worth the abstraction (though this is generally a small footprint).

 https://carldanley.com/js-facade-pattern/
 */

'use strict';

function addEvent(element, event, callback) {

    if (window.addEventListener) {
        element.addEventListener(event, callback, false);
    } else if (document.attachEvent) {
        element.attachEvent('on' + event, callback);
    } else {
        element['on' + event] = callback;
    }
}