import Water from './tiles/water.js';

export class Grid {
  constructor() {
    this.width = 32;
    this.height = 16;
    this.tiles = [];
    for (let y = 0; y < this.height; y++) {
      const row = [];
      for (let x = 0; x < this.width; x++) {
        row.push(new Water());
      }
      this.tiles.push(row);
    }
  }

  getTiles() {
    return this.tiles;
  }
} 