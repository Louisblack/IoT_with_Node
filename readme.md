
# Building the Internet of Things with Node.js

## Wiring Pi

I mentioned a command line utility that you can use to test the GPIO pins. More information can be found [here](https://projects.drogon.net/raspberry-pi/wiringpi/the-gpio-utility/)
```
gpio -g mode 18 out
gpio -g write 18 1
gpio -g write 18 0
```

## Installing Node.js

If you use the package manager like apt-get you might get an older version of Node. Node 4 is the current LTS release and supports lots of nice ES6 features.

## rpi  gpio

The examples I showed use the module [rpi-gpio](https://www.npmjs.com/package/rpi-gpio) but there are many more to choose from.

## Hardware

Be aware that we now have a few different versions of the Raspberry Pi. Pin configuration may be different across different models. 

To connect the LED to the GPIO pins I'm using a breadboard, jumper cables and a resistor which are all available on eBay for very little money. The IR motion sensor was also bought from eBay - just search Raspberry Pi PIR sensor.

You can buy Raspberry Pi starter kits which bundle together a few different components but these can be a little expensive compared to buying the bits seperately. Although you do end up with bags of hundreds of LEDs and resistors...

## Further reading

There are loads of tutorials available online - the ones from the Raspberry Pi foundation are obviously high quality. A lot of the examples are in Python but you should be able to port them to JavaScript pretty easily.  


