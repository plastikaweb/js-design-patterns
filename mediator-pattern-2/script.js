/**
 * Created by carlos.matheu on 29/12/2015.
 */
'use strict';

var chatroom = new Chatroom();

// participants
var carlos = new Participant('carlos'),
    anna = new Participant('anna'),
    pep = new Participant('pep');

// register participants to chat
chatroom.register(carlos);
chatroom.register(anna);
chatroom.register(pep);

carlos.send('hola que tal', anna);
anna.send('molt bé', carlos);
pep.send('esteu vius?');
carlos.send('estem morts!', pep);
anna.send('sí!!');
