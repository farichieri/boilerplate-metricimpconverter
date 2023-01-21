'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    try {
      const { input } = req.query;

      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      const returnNum = Number(convertHandler.convert(initNum, initUnit));
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const string = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );

      res.status(200).send({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string,
      });
    } catch (error) {
      res.status(200).send(error.message);
    }
  });
};
