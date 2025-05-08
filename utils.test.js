import { getJson } from './utils.js';

describe('Utility Functions', () => {
  describe('getJson', () => {
    it('should return an object when passed a valid path to a JSON file', () => {
      const filePath = './dummy.json'; 
      const result = getJson(filePath);
      expect(typeof result).toBe('object');
      expect(result).not.toBeNull();
      expect(result.name).toBe("this is the name");
    });
  });
}); 