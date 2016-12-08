
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extend = require('./extend');


function NintendoDS( ) {
  GameConsole.call(this, 'Nintendo DS');
}

extend(NintendoDS, GameConsole);
extend(NintendoDS, WebBrowser);

module.exports = NintendoDS;