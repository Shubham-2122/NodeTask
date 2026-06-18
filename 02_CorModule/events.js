const EventEmitter = require('events');

const event = new EventEmitter();

event.on('start', () => {
    console.log("Project Started");
});

event.emit('start');