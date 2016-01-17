var gpio = require('rpi-gpio'),
    pin = 17,
    deplay = 1000;

gpio.setup(pin, gpio.DIR_OUT, turnOn);

function turnOn() {
    gpio.write(pin, 1, turnOff);
};

function turnOff() {
    setTimeout(function() {
        gpio.write(pin, 0, turnOn);
    }, delay);
};
