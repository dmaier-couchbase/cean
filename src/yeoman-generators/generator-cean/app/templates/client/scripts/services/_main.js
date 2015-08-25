var services = angular.module('<%= _.slugify(_.humanize(appname)) %>');

// DON'T REMOVE OR MODIFY THE FOLLOWING LINE
//-- cean: Services

services.factory('MyService', function($http) {
   
    var myService = new TMyService($http);
    
    return myService;
});