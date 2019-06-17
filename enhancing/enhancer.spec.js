const { repair, succeed, fail, get } = require('./enhancer.js');


describe('enhancer.js', () => {
  describe('repair()', () => {
    it('restore durability to 100', () => {
      expect(repair({ durability: 0}).durability).toBe(100)
      expect(repair({ durability: -10}).durability).toBe(100)
      expect(repair({ durability: 90}).durability).toBe(100)
      expect(repair({ durability: 100}).durability).toBe(100)
    })
  });
});
