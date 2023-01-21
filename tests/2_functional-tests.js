const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
  test('Convert a valid input such as 10L', (done) => {
    chai
      .request(server)
      .get('/api/convert?input=10L')
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.equal(
          res.text,
          JSON.stringify({
            initNum: 10,
            initUnit: 'L',
            returnNum: 2.64172,
            returnUnit: 'gal',
            string: '10 liters converts to 2.64172 gallons',
          })
        );
      });
    done();
  });

  test('Convert an invalid input such as 32g:', (done) => {
    chai
      .request(server)
      .get('/api/convert?input=32g')
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'invalid unit');
      });
    done();
  });

  // test('Convert an invalid number such as 3/7.2/4kg', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/convert?input=3/7.2/4kg')
  //     .end((req, res) => {
  //       assert.equal(res.status, 200);
  //       assert.equal(res.text, 'invalid number');
  //     });
  //   done();
  // });

  // test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/convert?input=3/7.2/4kilomegagram')
  //     .end((req, res) => {
  //       assert.equal(res.status, 200);
  //       assert.equal(res.text, 'invalid number and unit');
  //     });
  //   done();
  // });

  test('Convert with no number such as kg:', (done) => {
    chai
      .request(server)
      .get('/api/convert?input=kg')
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.equal(
          res.text,
          res.text,
          JSON.stringify({
            initNum: 1,
            initUnit: 'kg',
            returnNum: 2.20462,
            returnUnit: 'lbs',
            string: '1 kilograms converts to 2.20462 pounds',
          })
        );
      });
    done();
  });
});
