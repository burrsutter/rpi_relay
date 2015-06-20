var Gpio = require('onoff').Gpio;
var lamp_pin = new Gpio(27,'out');

lamp_pin.writeSync(0);



