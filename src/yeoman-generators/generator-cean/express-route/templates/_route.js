var express = require('express');
var helper = require('../helper.js');
var cb = require('../cb.js');

var router = express.Router();
var bucket = cb.bucket();

/**
 * Service method
 */
router.get('<%= path %>', function (req, res) {
	
    //Your router code here
    //...
    
    //e.g.:
    //bucket.get(key, function(err, cbres) {  ... });
});

module.exports = router;
