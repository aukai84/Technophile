
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

function NintendoDS( ) {
  GameConsole.call(this, 'Nintendo DS');
}

extend(NintendoDS, GameConsole);
extend(NintendoDS, WebBrowser);

module.exports = NintendoDS;