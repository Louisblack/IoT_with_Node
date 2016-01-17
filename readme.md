
# Building the Internet of Things with Node.js

## Wiring Pi

I mentioned a command line utility that you can use to test the GPIO pins. More information can be found [here](https://projects.drogon.net/raspberry-pi/wiringpi/the-gpio-utility/)
```
gpio -g mode 17 out
gpio -g write 17 1
```

## Installing Node.js

I used NVM to install the latest version of Node. More information [here](https://github.com/creationix/nvm).

## rpi  gpio

The examples I showed use the module [rpi-gpio](https://www.npmjs.com/package/rpi-gpio). 
