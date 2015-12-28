/**
 * Created by carlos.matheu on 28/12/2015.
 */

//Extend am object
function extend(obj, extension) {
    for (var key in extension) {
        obj[key] = extension[key];
    }
}

//DOM elements
var controlCB = document.getElementById('mainCheckBox'),
    addBtn = document.getElementById('addNewObserver'),
    container = document.getElementById('observersContainer');

//Concrete Subject
extend(controlCB, new Subject());

//click the checkbox and trigger notifications to its observers
controlCB.onclick = function () {
    controlCB.notify(controlCB.checked);
};

addBtn.onclick = function () {
    var check = document.createElement('input');
    check.type = 'checkbox';

    extend(check, new Observer());

    check.update = function (value) {
        console.log('observer updated with value', value);
        this.checked = value;
    };

    controlCB.addObserver(check);
    container.appendChild(check);
};

