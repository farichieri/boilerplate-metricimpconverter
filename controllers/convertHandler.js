function ConvertHandler() {
  this.getNum = function (input) {
    const unit = this.getUnit(input);

    if (!unit) {
      throw new Error('invalid unit');
    }

    let number = eval(input.split(unit)[0]) || 1;

    return Number(number);
  };

  this.getUnit = function (input) {
    if (input.includes('km')) {
      return 'km';
    } else if (input.includes('gal')) {
      return 'gal';
    } else if (input.includes('lbs')) {
      return 'lbs';
    } else if (input.includes('kg')) {
      return 'kg';
    } else if (input.includes('l')) {
      return 'l';
    } else if (input.includes('mi')) {
      return 'mi';
    } else {
      throw new Error('invalid unit');
    }
  };

  this.getReturnUnit = function (initUnit) {
    switch (this.getUnit(initUnit.toLowerCase())) {
      case 'km':
        return 'mi';
      case 'mi':
        return 'km';
      case 'gal':
        return 'L';
      case 'l':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      default:
        throw new Error('invalid unit');
    }
  };

  this.spellOutUnit = function (unit) {
    switch (this.getUnit(unit.toLowerCase())) {
      case 'km':
        return 'kilometers ';
      case 'mi':
        return 'miles ';
      case 'gal':
        return 'gallons ';
      case 'l':
        return 'liters';
      case 'lbs':
        return 'pounds ';
      case 'kg':
        return 'kilograms ';
      default:
        throw new Error('invalid unit');
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit) {
      case 'km':
        return initNum / miToKm;
      default:
        break;
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
