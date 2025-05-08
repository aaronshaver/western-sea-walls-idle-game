import Water from './water.js';

describe('Water Object', () => {
  it('should initialize with correct properties', () => {
    const water = new Water();
    expect(typeof water.name).toBe('string');
    expect(water.name.length).toBeGreaterThan(0);
    expect(typeof water.description).toBe('string');
    expect(water.description.length).toBeGreaterThan(0);
    expect(water.character).toBe('~');
  });
}); 