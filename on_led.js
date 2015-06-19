var Gpio = require('onoff').Gpio;
var led_pin = new Gpio(16,'out');

led_pin.writeSync(1);


