/**
 * Created by carlos.matheu on 29/12/2015.
 */
'use strict';

var Participant = (function() {
    var Participant = function (name) {
        this.name = name;
        this.chatroom = null;
    };

    Participant.prototype = {
        send: function (message, to) {
            this.chatroom.send(message, this, to);
        },
        receive: function (message, from) {
            console.log(this.name + ' received a message from ' + from.name + ': \'' + message + '\'');
        }
    };

    return Participant;
}());
