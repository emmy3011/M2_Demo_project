const expect = require('chai').expect;

// Beispiel-Funktion zum Testen
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

describe('#sum()', function () {
  it('should add numbers', function () {
    expect(sum(2, 3)).to.equal(5);
  });

  it('should handle negative numbers', function () {
    expect(sum(-2, 3)).to.equal(1);
  });

  it('should handle zero', function () {
    expect(sum(0, 0)).to.equal(0);
  });

  it('should handle decimal numbers', function () {
    expect(sum(2.5, 3.5)).to.equal(6);
  });

  it('should throw error if input is not a number', function () {
    expect(() => sum('a', 2)).to.throw(Error);
  });
});
