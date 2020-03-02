const operationFunct = require('../logic');

describe('operationFunct', function() {
  it('2 + 5', function() {
    assert.equal(operationFunct(2, 5, '+'), 7);
  });
  it('55 * 0', function() {
    assert.equal(operationFunct(55, 0, '*'), 0);
  });
  it('15 / 3', function() {
    assert.equal(operationFunct(15, 3, '/'), 5);
  });
  it('12 - 14', function() {
    assert.equal(operationFunct(12, 14, '-'), -2);
  });
  it('12 * 5', function() {
    assert.equal(operationFunct(12, 5, '*'), 60);
  });
  it('1.2 - 14', function() {
    assert.equal(operationFunct(1.2, 14, '-'), -12.8);
  });
  it('1.5 * 10', function() {
    assert.equal(operationFunct(1.5, 10, '*'), 15);
  });
  it('1.4 / 2', function() {
    assert.equal(operationFunct(1.4, 2, '/'), 0.7);
  });
  it('2 / 0.5', function() {
    assert.equal(operationFunct(2, 0.5, '/'), 4);
  });
  it('3.5 * 0.5', function() {
    assert.equal(operationFunct(3.5, 0.5, '*'), 1.75);
  });
  it('1.2 / 0.2', function() {
    assert.equal(Math.round(operationFunct(1.2, 0.2, '/')), 6);
  });

  it('55 2 = ', function() {
    assert.equal(operationFunct(55, 2, '='), 55);
  });

  it('55 / "ds"', function() {
    assert.equal(operationFunct(55, 'ds', '/'), undefined);
  });

  it('55 x 2', function() {
    assert.equal(operationFunct(55, 2, 'x'), undefined);
  });
});
