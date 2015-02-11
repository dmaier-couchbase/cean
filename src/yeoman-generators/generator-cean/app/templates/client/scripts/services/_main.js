var services = angular.module('<%= _.slugify(_.humanize(appname)) %>');

services.factory('MyService', function($http) {
   
    var myService = new TMyService($http);
    
    return myService;
});