'use strict';

describe('Service: Logging', function () {

  // load the service's module
  beforeEach(module('compendiumjsApp'));

  // instantiate service
  var Logging;
  beforeEach(inject(function (_Logging_) {
    Logging = _Logging_;
  }));

  it('should do something', function () {
    expect(!!Logging).toBe(true);
  });

});
