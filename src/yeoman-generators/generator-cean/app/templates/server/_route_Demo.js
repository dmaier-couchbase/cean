var express = require('express');
var router = express.Router();

var helper = require('../helper.js');
var cb = require('../cb.js');

var bucket = cb.bucket();


/**
 * Add a document
 */
router.post('/add', function (req, res) {
	
    var id = req.query.id;
    var msg = req.query.msg;
            
    if (helper.isDefined(id) && helper.isDefined(msg))
    {
        var key = "msg::" + id;
        var doc  = { 'msg' : msg };

        bucket.insert( key, doc, function(err, cbres) {
         
            if (err)
            {
                var emsg = "Could not add the document!";
                console.log("ERROR " + emsg);
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
        console.log("ERROR: " + emsg); 
        res.json({"error" : emsg});
    }    
});


/**
 * Get a document
 */
router.get('/get', function (req, res) {
	
    var id = req.query.id;
    
    if (helper.isDefined(id))
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
        console.log("ERROR: " + emsg); 
        res.json({"error" : emsg});
    }    
});

module.exports = router;
