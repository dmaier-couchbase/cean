//Basic express requirements
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

//Couchbase requirements and connection initialization
var CB_HOST = '<%= host %>';
var CB_BUCKET = '<%= bucket %>';
var CB_PWD = '<%= password %>';

var couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://' + CB_HOST);
var bucket = cluster.openBucket(CB_BUCKET, CB_PWD);
var viewQuery = new couchbase.ViewQuery();
    
if (cluster && bucket && viewQuery)
{
    console.log("cluster = " + JSON.stringify(cluster));
    console.log("bucket = " + JSON.stringify(bucket));
}
else
{
    console.log("ERROR: Could not initialize Couchbase");
}

//The express application initialization
var app = express();

//The static resources
app.use('/',express.static(__dirname + '/public'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));

//The service implementation
var SERVICE_URL = '/service/';

/**
 * Helper to check if the variable is defined
 */
function isDefined(obj)
{  
    if (typeof obj == 'undefined' || obj == 'undefined' || obj == null)
    {
        return false;
    }
    
    return true;
}

/**
 * Add a document
 */
app.post(SERVICE_URL + 'add', function (req, res) {
	
    var id = req.query.id;
    var msg = req.query.msg;
        
    
    if (isDefined(id) && isDefined(msg))
    {
        var key = "msg::" + id;
        var doc  = { 'msg' : msg };

        bucket.insert( key, doc, function(err, cbres) {
         
            if (err)
            {
                var emsg = "Could not add the document!";
                console.log("ERROR" + emsg);
                res.json({ "error" : emsg });
                
            }
            else
            {
                console.log("Added " + key + " to Couchbase");
                res.json({ 'success' : true });
            }
        });      
    }
    else
    {
        var emsg = "Did you pass all mandatory parameters?";
        console.log("ERROR:" + emsg); 
        res.json({"error" : emsg});
    }    
});


/**
 * Get a document
 */
app.get(SERVICE_URL + 'get', function (req, res) {
	
    var id = req.query.id;
    
    if (isDefined(id))
    {
        var key = "msg::" + id;

        bucket.get(key, function(err, cbres) {
          
            if (err)
            {
                var emsg = "Could not get the document!";
                console.log("ERROR" + emsg);
                res.json({ "error" : emsg });
                
            }
            else
            {
                console.log("Got " + JSON.stringify(cbres));
                res.json(cbres);
            }
            
        }); 
    }
    else
    {
        var emsg = "Did you pass all mandatory parameters?";
        console.log("ERROR:" + emsg); 
        res.json({"error" : emsg});
    }    
});

//Web server
server = app.listen(9000, function () { 
	
	var host = server.address().address
	var port = server.address().port 

	console.log('Example app listening at http://%s:%s', host, port)
	  
});
