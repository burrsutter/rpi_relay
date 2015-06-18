var Gpio = require('onoff').Gpio;
var lamp_pin = new Gpio(17,'out');

lamp_pin.writeSync(1);




