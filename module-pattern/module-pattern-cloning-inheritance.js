/**
 * Created by carlos.matheu on 22/12/2015.
 * http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
 */
var ModuleClone = (function (old) {

    var my = {}, key;

    for (key in old) {
        if (old.hasOwnProperty(key)) {
            my[key] = old[key];
        }
    }

    var super_moduleMethod = old.moduleMethod;
    my.moduleMethod = function () {
        // override method on the clone, access to super through super_moduleMethod
    };

    return my;

}(MyModule));
