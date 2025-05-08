import Game from './game';

describe('Game Object', () => {
  it('should initialize with default properties when no parameters are passed', () => {
    const game = new Game();
    expect(game.grid.width).toBe(32);
    expect(game.grid.height).toBe(16);
    expect(game.money).toBe(0);
  });

  it('should have a non-null grid object upon instantiation', () => {
    const game = new Game();
    expect(game.grid).not.toBeNull();
    expect(typeof game.grid).toBe('object'); // Optional: also check if it's an object
  });
}); 