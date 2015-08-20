'use strict';

//Import the base generator module
var helper = require('../app/helper.js');
var gens = require('yeoman-generator');
var fs = require('fs');

//Extend the base generator
module.exports = gens.Base.extend({
    
    constructor: function () {
        
        //Call the super constructor
        gens.Base.apply(this, arguments);
        
        //Parameters
        this.argument('viewfilename', { type: String, required: true });
        this.argument('controllername', { type: String, required: true });
        
        this.project = this.destinationRoot();
    },
    
    info : function () {        
        
        //Print some info
        console.log("== CEAN - Angular Route Generator  ==");
        console.log("project = " + this.project);
        console.log("viewfilename = " + this.viewfilename);
        console.log("controllername = " + this.controllername);
        
        //Print a list views
        console.log("");
        console.log("== Views ==");
        var views = fs.readdirSync('public/views');
        console.log(JSON.stringify(views));
        
        
        //Print a list controllers
        console.log("");
        console.log("== Controllers ==");
        var controllers = fs.readdirSync('public/scripts/controllers');
        console.log(JSON.stringify(controllers));
        console.log("");
    },
    
    askForViewFileName : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'viewfilename',
                message : 'The file name of the View',
                default : this._.camelize(this.viewfilename)
        }, function (answers) {
            this.log(answers.viewfilename);
            this.viewfilename = answers.viewfilename;
            done();
        }.bind(this));
    },
    
    askForControllerName : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'controllername',
                message : 'Controller Name',
                default : this._.camelize(this.controllername)
        }, function (answers) {
            this.log(answers.controllername);
            this.controllername = answers.controllername;
            done();
        }.bind(this));
    },
        
    register : function() {
     
        console.log("Adding a route to app.js ...");
        
        //Route needs to be added to the app.js file after //-- cean: Routes
        var file = this.project + "/public/scripts/app.js";
        
        helper.replace(file, '//-- cean: Routes', 
                             '//-- cean: Routes \n' +
                             '.when(\'/' + this.viewfilename + '\', { templateUrl : \'views/' + 
                              this.viewfilename + '\', controller : \'' + this.controllername + '\' })\n');
    }
});