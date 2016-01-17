var gpio = require('rpi-gpio'),
    pin = 18;

gpio.setMode(gpio.MODE_BCM);

gpio.setup(pin, gpio.DIR_OUT, function() {
    if (err) {
        throw new Error(err);
    }
});

exports.turnOn = function() {
    gpio.write(pin, true);
};

exports.turnOff = function() {
    gpio.write(pin, false);
};
