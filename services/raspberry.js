var Gpio = require('onoff').Gpio;
var events = require('events');
var database = require('./firebasedb');

var raspberry = {
    open : {
    },
    close: {},
    watchButton: function (bPin, lPin) {

        var button = new Gpio(bPin, 'in', 'both');
        var led = new Gpio(lPin, 'out');
        button.watch(function(err, value) {
            //console.log("bPin: " + bPin + ", lPin: " + lPin);
            //led.writeSync(value);
            led.write(value,function (err) {
                //console.log(err)
                var status = !!value;
                var statusPostKey = database.getComponent(0).child('status').push().key;
                var result = database.getComponentStatus(0).set(status);
                console.log(status);
                console.log(result);
            })
        });
        //button.watch(this.lightLed(lPin));
    }
    /*lightLed: function (pin) {
        var led = new Gpio(pin, 'out');
    }*/
};

module.exports = raspberry;