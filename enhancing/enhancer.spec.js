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

  describe('succeed()', () => {
    it('The enhancement increases by 1', () => {
      expect(succeed({ enhancement: 0}).enhancement).toBe(1)
      expect(succeed({ enhancement: -10}).enhancement).toBe(-9)
      expect(succeed({ enhancement: 90}).enhancement).toBe(20)
      expect(succeed({ enhancement: 20}).enhancement).toBe(20)
    })
  });
});
