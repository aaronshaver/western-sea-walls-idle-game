import Renderer from './renderer.js';

describe('Renderer Class', () => {
  describe('render method', () => {
    it('should return true', () => {
      const renderer = new Renderer();
      expect(renderer.render()).toBe(true);
    });
  });
}); 