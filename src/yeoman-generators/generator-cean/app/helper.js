'use strict';

var path = require('path');
var fs = require('fs');

function _replace(fileName, match , repl) {
 
        fs.readFile(fileName, 'utf8', function (err,data) {

            if (err) return console.log(err);
                    
            var regexp = new RegExp(_escape(match),"g");
            var result = data.replace(regexp, repl);
            
            fs.writeFile(fileName, result, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        });
}
    
function _escape(string) {
        
    return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
}


module.exports = {
    
    /**
     * Connect to Couchbase
     */
    replace : function(fileName, match, repl) {
        
        return _replace(fileName, match, repl);
    },
    
    escape : function(string) {
     
        return _escape(string);
    }
}