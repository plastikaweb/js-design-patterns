/**
 * Created by carlos.matheu on 28/12/2015.
 * The cached static property is publicly available which adds a little danger
 * (someone could say Universe.instance = foo)
 * but this version is very straightforward and doesn't require closures and funky prototype work.
 * If you're lazy this might be a good approach.
 *
 * var me = new User('Carlos', 'Matheu');
 * User.instance = ''; // DANGER! this resets instance so we could create a new instance
 * var me2 = new User('Pepe', 'Papapa');
 *
 * http://robdodson.me/javascript-design-patterns-singleton/
 **/

'use strict';

function User(firstName, lastName) {

    if (typeof User.instance === 'object') {
        console.log('return the single instance');
        return User.instance;
    }

    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }

    User.instance = this;
}

var me = new User('Carlos', 'Matheu');
console.log(me.getFullName());
User.instance = '';

var me2 = new User('Pepe', 'Papapa');
console.log(me2.getFullName()); // returns the first instance