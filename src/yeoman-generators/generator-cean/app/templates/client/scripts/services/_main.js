var qaServices = angular.module('<%= _.slugify(_.humanize(appname)) %>');

qaServices.factory('MyService', function($http) {
   
    var myService = new TMyService($http);
    
    return myService;
});