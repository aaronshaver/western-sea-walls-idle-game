import { Grid } from './grid.js';
import Renderer from './renderer.js';

class Game {
  constructor() {
    this.money = 0;
    this.grid = new Grid();
    this.renderer = new Renderer();
  }
}

export default Game; 