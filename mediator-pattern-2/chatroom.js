/**
 * Created by carlos.matheu on 29/12/2015.
 *
 * The Mediator pattern provides central authority over a group of objects by encapsulating how these objects interact.
 * This model is useful for scenarios where there is a need to manage complex conditions
 * in which every object is aware of any state change in any other object in the group.
 * The Mediator patterns are useful in the development of complex forms.
 * Take for example a page in which you enter options to make a flight reservation.
 * A simple Mediator rule would be: you must enter a valid departure date, a valid return date,
 * the return date must be after the departure date, a valid departure airport, a valid arrival airport,
 * a valid number of travelers, and only then the Search button can be activated.
 *
 * Another example of Mediator is that of a control tower on an airport coordinating arrivals and departures of airplanes.
 *
 * The objects participating in this pattern are:
 *  Mediator -- In sample code: Chatroom
 *   defines an interface for communicating with Colleague objects
 *   maintains references to Colleague objects
 *   manages central control over operations
 *  Colleagues -- In sample code: Participants
 *   objects that are being mediated by the Mediator
 *   each instance maintains a reference to the Mediator
 *
 * http://www.dofactory.com/javascript/mediator-design-pattern
 */
'use strict';

var Chatroom = (function () {

    var participants = {}, key;

    var Chatroom = function () {

        this.register = function (participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        };

        this.send = function (message, from, to) {
            if (to) { //single message
                to.receive(message, from);
            } else { // broadcast message
                for (key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };

    return Chatroom;

}());
