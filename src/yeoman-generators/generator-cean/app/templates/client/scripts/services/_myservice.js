/**
 * TMyService
 */

/*
 * Constructor
 */
function TMyService(httpService)
{
  this.httpService = httpService;   
}


TMyService.prototype.get = function(id)
{
    var url = "/service/get?id=" + id;

    var promise = this.httpService.get(url, {}).success(function (data) { /*Allows to handle the result and errors */ });
    
    return promise;
}

TMyService.prototype.add = function(id, msg)
{
    var url = "/service/add?id=" + id + "&msg=" + msg;
        
    var promise = this.httpService.post(url, {}).success(function (data) { /*Allows to handle the result and errors */ });
    
    return promise;
}