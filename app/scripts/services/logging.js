'use strict';

angular.module('compendiumjsApp')
  .service('loggingService', function loggingService() {
    var logger = this;
    // list of logs held by this service. 
    // Eventually, this could be pushed to a server
    logger.logs = [];
    // a template for a new log. If it doesn't meet this, 
    // it will not be saved. Should help keep things more uniform
    logger.logTemplate = {'creator':'', 'timeLogged':'', 'description':''}

    // take in a new log.
    logger.setLog = function(log){
    	if(log.creator && log.timeLogged && log.description){
    		logger.logs.push(log);
    	}
    }

    // view logs
    logger.getLog = function(){
    	return logger.logs;
    }

    return logger;
  });
