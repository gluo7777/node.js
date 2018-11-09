// EventEmitter -> Listeners (callback function)

const EventEmitter = require('events');

const someEmitter = new EventEmitter();

someEmitter.on('someEvent', () => {
    console.log(`Some event occured;`);
});

someEmitter.on('someOtherEvent', () => {
    console.log(`More events, really?`);
});

someEmitter.emit('someEvent');
someEmitter.emit('someOtherEvent');

// The eventEmitter.emit() method allows an arbitrary set of arguments to be passed to the listener functions.
someEmitter.on('complexEvent', (name, age) => {
    console.log(`Hi, this is ${name} and I am ${age} old.`);
    // this references eventEmitter instance, but NOT when using arrow functions
    console.log(this === someEmitter);
});

someEmitter.emit('complexEvent', 'William', 23);

// always add handler for error event
someEmitter.on('error', () => { console.log(`All good!`) });