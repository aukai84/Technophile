var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function extend(destination, source){
  for (var k in source.prototype){
    if(source.prototype.hasOwnProperty(k)){
      destination.prototype[k] = source.prototype[k];
    }
  }
  return destination;
}

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, "Smart Phone");
}

extend(SmartPhone, Phone);
extend(SmartPhone, Tablet);
extend(SmartPhone, GameConsole);
extend(SmartPhone, WebBrowser);

module.exports = SmartPhone;