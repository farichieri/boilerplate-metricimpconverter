const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  test('Should correctly read a whole number input', () => {
    assert.typeOf(convertHandler.getNum('4gal'), 'number');
  });
  test('Should correctly read a decimal number input.', () => {
    assert.typeOf(convertHandler.getNum('5.4lbs'), 'number');
  });
  test('Should correctly read a fractional input.', () => {
    assert.equal(convertHandler.getNum('1/2km'), 0.5);
  });
  test('Should correctly read a fractional input with a decimal.', () => {
    assert.equal(convertHandler.getNum('5.4/3lbs'), 1.8);
  });
  test('Should correctly return an error on a double-fraction', () => {
    assert.throws(() => {
      convertHandler.getNum('3/2/3');
    }, Error);
  });
  test('Should correctly default to a numerical input of 1 when no numerical input is provided.', () => {
    assert.equal(convertHandler.getNum('kg'), 1);
  });
  test('Should correctly read each valid input unit.', () => {
    assert.equal(convertHandler.getUnit('4gal'), 'gal');
    assert.equal(convertHandler.getUnit('1/2km'), 'km');
    assert.equal(convertHandler.getUnit('5.4/3lbs'), 'lbs');
    assert.equal(convertHandler.getUnit('kg'), 'kg');
  });
  test('Should correctly return an error for an invalid input unit.', () => {
    assert.throws(() => {
      convertHandler.getUnit('12e');
    }, Error);
  });
  test('Should return the correct return unit for each valid input unit.', () => {
    assert.equal(convertHandler.getReturnUnit('4gal'), 'L');
    assert.equal(convertHandler.getReturnUnit('1/2km'), 'mi');
    assert.equal(convertHandler.getReturnUnit('5.4/3lbs'), 'kg');
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
  });
  test('Should correctly convert gal to L', () => {
    assert.equal(convertHandler.getReturnUnit('gal'), 'L');
  });
  test('Should correctly convert L to gal', () => {
    assert.equal(convertHandler.getReturnUnit('L'), 'gal');
  });
  test('Should correctly convert gal to L', () => {
    assert.equal(convertHandler.getReturnUnit('mi'), 'km');
  });
  test('Should correctly convert gal to L', () => {
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
  });
  test('Should correctly convert gal to L', () => {
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
  });
  test('Should correctly convert gal to L', () => {
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
  });
});
