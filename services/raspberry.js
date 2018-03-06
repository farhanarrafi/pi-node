var Gpio = require('onoff').Gpio;
var events = require('events');
var eventEmitter = new events.EventEmitter();

var raspberry = {
    open : {
    },
    close: {},
    watchButton: function (bPin, lPin) {
        var button = new Gpio(bPin, 'in', 'both');
        button.watch(this.lightLed(lPin));
    },
    lightLed: function (pin) {
        var led = new Gpio(pin, 'out');
    }
};

module.exports = raspberry;