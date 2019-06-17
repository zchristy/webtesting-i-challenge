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

  describe('fail()', () => {
    it('The enhancement is changed to respected value', () => {
      expect(fail({ enhancement: 0, durability: 0}).durability).toBe(-5)
      expect(fail({ enhancement: -10, durability: -10}).durability).toBe(-15)
      expect(fail({ enhancement: 15, durability: 15}).durability).toBe(5)
      expect(fail({ enhancement: 17}).enhancement).toBe(16)
    })
  });
});
