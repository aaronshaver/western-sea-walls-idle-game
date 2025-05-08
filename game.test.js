// We'll need to import the Game object once it's created.
// For now, this will cause a ReferenceError, which is expected in TDD.
// const Game = require('./game'); // Assuming game.js will be in the same directory

describe('Game Object', () => {
  it('should initialize with default properties when no parameters are passed', () => {
    const game = new Game();
    expect(game.width).toBe(32);
    expect(game.height).toBe(16);
    expect(game.money).toBe(0);
  });
}); 