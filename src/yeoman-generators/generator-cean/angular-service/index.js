//TODO!!!

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
        console.log("== CEAN - Angular Service Generator  ==");
        console.log("project = " + this.project);
        console.log("name = " + this.name);
    },
    
    askForFileName : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'filename',
                message : 'Service File Name',
                default : this._.slugify(this._.humanize(this.name)) + ".js"
        }, function (answers) {
            this.log(answers.filename);
            this.filename = answers.filename;
            done();
        }.bind(this));
    },
    
    askForName : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'name',
                message : 'Service Name',
                default : this._.camelize(this.name)
        }, function (answers) {
            this.log(answers.name);
            this.name = answers.name;
            done();
        }.bind(this));
    },
    
    createService : function () {
                  
        //Apply templates        
        this.template('_service.js', 'public/scripts/services/' + this.filename);
    },
    
    registerService : function() {
     
        console.log("Adding the service to index.html ...");
        
        //The view needs to be added to the menu and so the header.html file
        var file = this.project + "/public/index.html";
        
        helper.replace(file, '<!-- cean: Services -->', 
                            '<!-- cean: Services --> \n' +
                            '<script src="scripts/services/' + this.filename + '"></script>');
        
        
        console.log("Adding the service to the main.js ...");
        
        file = this.project + "/public/scripts/services/main.js";
        
        helper.replace(file, '//-- cean: Services',
                             '//-- cean: Services\n' +
                             'services.factory("' + this.name + '", function($http) {\n'+
                             'var service = new T' + this.name + '($http);\n'+
                             'return service;\n'+
                             '});\n');
    }
});
