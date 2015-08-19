//Deps
var couchbase = require('couchbase');

//Connection params
var CB_HOST = '<%= host %>';
var CB_BUCKET = '<%= bucket %>';
var CB_PWD = '<%= password %>';

//Global variables
var _bucket;
var _viewQuery;


/**
 * A function to connect to Couchbase
 */
function _connect(host, bckt, password)
{
    var cluster = new couchbase.Cluster('couchbase://' + host);
    _bucket = cluster.openBucket(bckt, password);
    _viewQuery = new couchbase.ViewQuery();

    if (cluster && _bucket && _viewQuery)
    {
        console.log("cluster = " + JSON.stringify(cluster));
        console.log("bucket = " + JSON.stringify(_bucket));

        //Export the module variables
        var result = {}; 
        result.bucket = _bucket;
        result.viewQuery = _viewQuery;
        return result;
    }
    else
    {
        console.log("ERROR: Could not initialize Couchbase");
    }       
}

//Module exports
module.exports = {
    
    /**
     * Connect to Couchbase
     */
    connect : function() {
        
        return _connect(CB_HOST, CB_BUCKET, CB_PWD);
    },
    
    /**
     * Connect to Couchbase
     */
    connectOther : function(host, bckt, password) {

        return _connect(host, bckt, password);
    },
    
    /**
     * Get the bucket
     */
    bucket : function() {
        
        return _bucket;
    },
    
   /**
    * Get the viewQuery
    */
    viewQuery : function() {
        
        return _viewQuery;
    }
};
