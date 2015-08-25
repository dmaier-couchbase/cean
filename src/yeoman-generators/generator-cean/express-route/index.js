'use strict';

//Import the base generator module
var gens = require('yeoman-generator');
var helper = require('../app/helper.js');

//Extend the base generator
module.exports = gens.NamedBase.extend({
    
    constructor: function () {
        
        //Call the super constructor
        gens.NamedBase.apply(this, arguments);
                
        //Arguments
        this.project = this.destinationRoot(); 
    
        
    },
    
    info : function () {        
        
        //Print some info
        console.log("== CEAN - Express Router Generator  ==");
        console.log("project = " + this.project);
        console.log("name = " + this.name);
    },
    
    askForFileName : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'filename',
                message : 'Router File Name',
                default : this._.slugify(this._.humanize(this.name)) + ".js"
        }, function (answers) {
            this.log(answers.filename);
            this.filename = answers.filename;
            done();
        }.bind(this));
    },
    
    askForPath : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'path',
                message : 'Relative Path',
                default : '/' + this._.slugify(this._.humanize(this.name))
        }, function (answers) {
            this.log(answers.path);
            this.path = answers.path;
            done();
        }.bind(this));
    },
    
    createRouter : function () {
                  
        //Apply templates        
        this.template('_route.js', 'routes/' + this.filename);
    },
    
    registerRouter : function() {
     
        console.log("Adding the route to app.js ...");
        
        //Register the router by adding it to the server side application entry point 'app.js'
        var file = this.project + "/app.js";
                
        helper.replace(file, '//-- cean: Routers', 
                             '//-- cean: Routers\n' +
                             'var ' + this._.slugify(this._.humanize(this.name)) + ' = require("./routes/' + this.filename + '");\n' +
                             'app.use(SERVICE_URL, ' + this._.slugify(this._.humanize(this.name)) + ');\n'                  
                      );
    }
});
