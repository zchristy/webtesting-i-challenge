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
    it('The durablity or enhancement is changed to respected value based on enhancement values', () => {
      expect(fail({ enhancement: 0, durability: 0}).durability).toBe(-5)
      expect(fail({ enhancement: -10, durability: -10}).durability).toBe(-15)
      expect(fail({ enhancement: 16, durability: 15}).durability).toBe(5)
      expect(fail({ enhancement: 17, durability: 15})).toEqual({enhancement: 16, durability: 5})
    })
  });

  describe('get()', () => {
    it('The name is changed based on enhancement value', () => {
      expect(get({ enhancement: 0, name: 'zach'}).name).toBe('zach')
      expect(get({ enhancement: 20, name: 'zach'}).name).toBe('[+20] zach')
      expect(get({ enhancement: -4, name: 'zach'}).name).toBe('[-4] zach')
      expect(get({ enhancement: 100, name: 'zach'}).name).toBe('[+20] zach')
    })
  });
});
