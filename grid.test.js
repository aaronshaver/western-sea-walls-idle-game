import { Grid } from './grid.js';
import Water from './tiles/water.js';

describe('Grid Object', () => {
  it('should initialize with default width and height', () => {
    const grid = new Grid();
    expect(grid.width).toBe(32);
    expect(grid.height).toBe(16);
  });

  describe('getTiles method', () => {
    it('should return a 2D array where all elements are Water objects', () => {
      const grid = new Grid();
      const tiles = grid.getTiles();
      
      expect(tiles).not.toBeNull();
      expect(Array.isArray(tiles)).toBe(true);
      expect(tiles.length).toBe(grid.height); // Check outer array length (height)

      for (let y = 0; y < tiles.length; y++) {
        const row = tiles[y];
        expect(Array.isArray(row)).toBe(true);
        expect(row.length).toBe(grid.width); // Check inner array length (width)
        for (let x = 0; x < row.length; x++) {
          const tile = row[x];
          expect(tile).toBeInstanceOf(Water);
        }
      }
    });
  });
}); 