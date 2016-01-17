var gpio = require('rpi-gpio'),
    pin = 11;

gpio.setMode(gpio.MODE_BCM);

gpio.on('change', function(channel, value) {
    if (value) {
        console.log("It's in the house!");
    }
    else {
        console.log("It's gone... for now.");
    }

});

gpio.setup(pin, gpio.DIR_IN, gpio.EDGE_BOTH, function(err) {
    if (err) {
        console.log(err);
    }
});
