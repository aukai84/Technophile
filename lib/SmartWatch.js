var Watch = require('./Watch');
var Tablet = require('./Tablet');
var extend = require('./extend');

function SmartWatch( ) {
  Watch.call(this);
}

extend(SmartWatch, Watch);
extend(SmartWatch, Tablet);

module.exports = SmartWatch;