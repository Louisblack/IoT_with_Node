
# Building the Internet of Things with Node.js

## Wiring Pi

I mentioned a command line utility that you can use to test the GPIO pins. More information can be found [here](https://projects.drogon.net/raspberry-pi/wiringpi/the-gpio-utility/)
```
gpio -g mode 18 out
gpio -g write 18 1
```

## Installing Node.js

If you use the package manager like apt-get you might get an older version of Node. Node 4 is the current LTS release and supports lots of nice ES6 features.

## rpi  gpio

The examples I showed use the module [rpi-gpio](https://www.npmjs.com/package/rpi-gpio) but there are many more to choose from.
