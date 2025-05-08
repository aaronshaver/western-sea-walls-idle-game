import { getJson } from '../utils.js';

class Water {
  constructor() {
    const data = getJson('tiles/water.json');
    this.name = data.name;
    this.description = data.description;
    this.character = data.character;
  }
}

export default Water; 