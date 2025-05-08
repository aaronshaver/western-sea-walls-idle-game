import { Grid } from './grid.js';

describe('Grid Object', () => {
  it('should initialize with default width and height', () => {
    const grid = new Grid();
    expect(grid.width).toBe(32);
    expect(grid.height).toBe(16);
  });
}); 