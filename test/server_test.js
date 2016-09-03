const expect = require('chai').expect;
const server = require('../lib/server.js');
const request = require('request');

describe('server response', () => {
  const port = process.env.npm_package_config_port;
  const uri = 'http://localhost:' + port;

  before(() => {
    server.listen(server.listen(port));
  });

  after(() => {
    server.close();
  });

  it('should return 404', (done) => {
    request.get(uri, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.equal('GET method');
      done();
    });
  });

  it('should return 201', (done) => {
    request.post(uri, (err, res, body) => {
      expect(res.statusCode).to.equal(201);
      expect(body).to.equal('POST method');
      done();
    });
  });

  it('should return 200', (done) => {
    request.put(uri, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('PUT method');
      done();
    });
  });

  it('should return 403', (done) => {
    request.delete(uri, (err, res, body) => {
      expect(res.statusCode).to.equal(403);
      expect(body).to.equal('DELETE method');
      done();
    });
  });

  it('should return 204', (done) => {
    request({
        method : 'OPTIONS',
        uri    : uri
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(204);
        done();
      });
  });
});