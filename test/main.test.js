const { expect } = require('chai');
const { poppinBottles } = require('../main');

describe('poppin Bottles Bottles test', () => {
  describe('when passed 10', () => {
    const actual = poppinBottles(10);
    const expected = {
      bottles: 1,
      caps: 3,
      totalBottles: 15,
      earnedFromBottleRecycle: 7,
      earnedFromCapRecycle: 3,
    };
    it('sholud return a proper instance', () => {
      expect(actual).to.deep.equal(expected);
    });
  });

  describe('when passed 20', () => {
    const actual = poppinBottles(20);
    const expected = {
      bottles: 1,
      caps: 3,
      totalBottles: 35,
      earnedFromBottleRecycle: 17,
      earnedFromCapRecycle: 8,
    };
    it('sholud return a proper instance', () => {
      expect(actual).to.deep.equal(expected);
    });
  });

  describe('when passed 30', () => {
    const actual = poppinBottles(30);
    const expected = {
      bottles: 1,
      caps: 3,
      totalBottles: 55,
      earnedFromBottleRecycle: 27,
      earnedFromCapRecycle: 13,
    };
    it('sholud return a proper instance', () => {
      expect(actual).to.deep.equal(expected);
    });
  });

  describe('when passed 40', () => {
    const actual = poppinBottles(40);
    const expected = {
      bottles: 1,
      caps: 3,
      totalBottles: 75,
      earnedFromBottleRecycle: 37,
      earnedFromCapRecycle: 18,
    };
    it('sholud return a proper instance', () => {
      expect(actual).to.deep.equal(expected);
    });
  });

  describe('when passed undefined', () => {
    const actual = poppinBottles(undefined);
    it('sholud return undefined', () => {
      expect(actual).to.be.undefined;
    });
  });

  describe('when passed a string', () => {
    const actual = poppinBottles('test');
    it('sholud return undefined', () => {
      expect(actual).to.be.undefined;
    });
  });

  describe('when passed a null', () => {
    const actual = poppinBottles(null);
    it('sholud return undefined', () => {
      expect(actual).to.be.undefined;
    });
  });
});
