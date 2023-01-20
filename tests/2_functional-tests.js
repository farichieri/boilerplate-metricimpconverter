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
        assert.equal(res.etxt(''));
      });
    done();
  });
});
