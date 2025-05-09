import Game from './game.js';

describe('Game Object', () => {
  it('should initialize with default money', () => {
    const game = new Game();
    expect(game.money).toBe(0);
  });

  it('should have a non-null grid object upon instantiation', () => {
    const game = new Game();
    expect(game.grid).not.toBeNull();
    expect(typeof game.grid).toBe('object');
  });

  it('should have a non-null renderer object upon instantiation', () => {
    const game = new Game();
    expect(game.renderer).toBeDefined();
  });

  it('should have a default tickTimeInMilliseconds of 2000', () => {
    const game = new Game();
    expect(game.tickTimeInMilliseconds).toBe(2000);
  });
}); 