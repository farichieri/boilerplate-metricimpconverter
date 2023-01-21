function ConvertHandler() {
  this.validNumber = (input, string) => {
    let number = input.split(string)[0] || 1;

    if (number.toString().includes('/')) {
      let values = number.toString().split('/');
      if (values.length != 2) {
        throw new Error('invalid number');
      }
    }
    return number;
  };

  this.getNum = function (input) {
    const string = input.match(/[a-zA-Z]+/g)[0];
    const unit = this.getUnit(input);

    if (!unit || !string) {
      throw new Error('invalid unit');
    }
    const result = Number(eval(this.validNumber(input, string)));

    if (isNaN(result)) {
      throw new Error('invalid number');
    }

    return result;
  };

  this.getUnit = function (input) {
    const string = input.match(/[a-zA-Z]+/g)[0].toLowerCase();
    if (string === 'km') {
      return 'km';
    } else if (string === 'gal') {
      return 'gal';
    } else if (string === 'lbs') {
      return 'lbs';
    } else if (string === 'kg') {
      return 'kg';
    } else if (string === 'l') {
      return 'L';
    } else if (string === 'mi') {
      return 'mi';
    } else {
      try {
        this.validNumber(input);
      } catch (error) {
        throw new Error('invalid number and unit');
      }
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
      case 'L':
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
        return 'kilometers';
      case 'mi':
        return 'miles';
      case 'gal':
        return 'gallons';
      case 'L':
        return 'liters';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
      default:
        throw new Error('invalid unit');
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case 'km':
        result = initNum / miToKm;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      default:
        throw new Error('invalid unit');
    }
    return result.toFixed(5);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
