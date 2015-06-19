var Gpio = require('onoff').Gpio;
var candy_pin = new Gpio(21,'out');

candy_pin.writeSync(1);



