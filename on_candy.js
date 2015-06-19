var Gpio = require('onoff').Gpio;
var candy_pin = new Gpio(27,'out');

candy_pin.writeSync(0);



