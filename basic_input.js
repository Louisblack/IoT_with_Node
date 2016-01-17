var gpio = require('rpi-gpio'),
    pin = 11;

gpio.setMode(gpio.MODE_BCM);

gpio.on('change', function(channel, value) {
	console.log('Channel ' + channel + ' value is now ' + value);
});

gpio.setup(pin, gpio.DIR_IN, gpio.EDGE_BOTH, function(err) {
    if (err) {
        console.log(err);
    }
});
