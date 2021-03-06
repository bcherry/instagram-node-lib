(function() {
  /*
  Test Setup
  */  var Init, Instagram, app, assert, completed, should, test, to_do;
  console.log("\nInstagram API Node.js Lib Tests :: Basic");
  Init = require('./initialize');
  Instagram = Init.Instagram;
  app = Init.app;
  assert = require('assert');
  should = require('should');
  test = require('./helpers');
  completed = 0;
  to_do = 0;
  /*
  Tests
  */
  module.exports = {
    'instagram#set': function() {
      console.log("\ninstagram#set");
      Instagram._config.should.have.property('client_id', process.env['CLIENT_ID']);
      Instagram.set('client_id', 'YOUR-CLIENT-ID');
      Instagram._config.should.have.property('client_id', 'YOUR-CLIENT-ID');
      test.output("Instagram._config has 'client_id' and it is now reset", Instagram._config.client_id);
      Instagram._config.should.have.property('client_secret', process.env['CLIENT_SECRET']);
      Instagram.set('client_secret', 'YOUR-CLIENT-SECRET');
      Instagram._config.should.have.property('client_secret', 'YOUR-CLIENT-SECRET');
      test.output("Instagram._config has 'client_secret' and it is now reset", Instagram._config.client_secret);
      Instagram.set('maxSockets', 10);
      Instagram._http_client.Agent.defaultMaxSockets.should.equal(10);
      Instagram._https_client.Agent.defaultMaxSockets.should.equal(10);
      test.output("Instagram._http(s)_client(s) have increased maxSockets to 10");
      return app.finish_test();
    }
  };
  app.start_tests(module.exports);
}).call(this);
