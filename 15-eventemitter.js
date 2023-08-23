const EventEmitter = require('events');

const customEmitter = new EventEmitter();

/**
 * In an event-driven programming, there are two basic event-emitting methods.
 * On - Listen for an event.
 * Emit - Emits an event.
 */

//Response is the name of the event
customEmitter.on('response', ()=>{
    console.log(`data received `);
}) 

customEmitter.emit('response');

// 1. You can have as many methods as possible.
// 2. It does not make sense if you emit before you listen, make sure to put all the necessary listening parts first before emitting.

customEmitter.on('call', (name, id) => {
    console.log(`Hello, you are ${name} with the ID of ${id}`);
})

customEmitter.emit('call', 'Kenny', 72);