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
        console.log("== CEAN - Angular View Generator  ==");
        console.log("project = " + this.project);
        console.log("name = " + this.name);
    },
    
    askForFileName : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'filename',
                message : 'View File Name',
                default : this._.slugify(this._.humanize(this.name)) + ".html"
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
                message : 'View Name',
                default : this._.camelize(this.name)
        }, function (answers) {
            this.log(answers.name);
            this.name = answers.name;
            done();
        }.bind(this));
    },
    
    askForSubtitle : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'subtitle',
                message : 'Sub title',
                default : 'Hello Couchbase!'
        }, function (answers) {
            this.log(answers.subtitle);
            this.subtitle = answers.subtitle;
            done();
        }.bind(this));
    },
    
    createView : function () {
                  
        //Apply templates        
        this.template('_view.html', 'public/views/' + this.filename);
    },
    
    registerView : function() {
     
        console.log("Adding the view to header.html ...");
        
        //The view needs to be added to the menu and so the header.html file
        var file = this.project + "/public/views/header.html";
        
        helper.replace(file, '<!-- cean: Views -->', 
                            '<!-- cean: Views --> \n' +
                            '<li> <a ng-href="#/' + this.filename + '">' + this.name + '</a> </li>');
    }
});
