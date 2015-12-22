/**
 * Created by carlos.matheu on 22/12/2015.
 * http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
 */
var MyModule = (function (my) {

    //One limitation of the module pattern so far is that the entire module must be in one file.
    //Anyone who has worked in a large code-base understands the value of splitting among multiple files.
    //Luckily, we have a nice solution to augment modules.
    //First, we import the module, then we add properties, then we export it.
    my.prototype.myThirdMethod = function myThirdMethod() {
        console.log('my method number 3');
    };

    return my;

}(MyModule || {}));

var newModule = new MyModule();
newModule.myThirdMethod();