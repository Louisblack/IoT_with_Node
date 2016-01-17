var gpio = require('rpi-gpio'),
    pin = 18,
    delay = 100;

gpio.setMode(gpio.MODE_BCM);

gpio.setup(pin, gpio.DIR_OUT, turnOn);

function turnOn(err) {
    if (err) {
        console.log(err);
    }
    setTimeout(function() {
        gpio.write(pin, true, turnOff);
    }, delay);
};

function turnOff(err) {
    if (err) {
        console.log(err);
    }
    setTimeout(function() {
        gpio.write(pin, false, turnOn);
    }, delay);
};
