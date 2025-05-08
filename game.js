class Game {
  constructor() {
    this.money = 0;
    this.grid = new Grid();
  }
}

// Define the new Grid class
class Grid {
  constructor() {
    this.width = 32;
    this.height = 16;
  }
}

export default Game; 