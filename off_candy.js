var Gpio = require('onoff').Gpio;
var candy_pin = new Gpio(22,'out');

candy_pin.writeSync(1);




