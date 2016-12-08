function GameConsole(systemName) {
  this.systemName = systemName;
}
GameConsole.prototype.play = function(game){
  return `${this.systemName} plays the ${game.title}`;
};

module.exports = GameConsole;