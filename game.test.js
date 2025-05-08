import Game from './game';

describe('Game Object', () => {
  it('should initialize with default properties when no parameters are passed', () => {
    const game = new Game();
    expect(game.width).toBe(32);
    expect(game.height).toBe(16);
    expect(game.money).toBe(0);
  });
}); 