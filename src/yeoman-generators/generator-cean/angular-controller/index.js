'use strict';

//Import the base generator module
var path = require('path');
var gens = require('yeoman-generator');

//Extend the base generator
module.exports = gens.NamedBase.extend({
    
    constructor: function () {
        
        //Call the super constructor
        gens.NamedBase.apply(this, arguments);
                
        //Arguments
        this.argument('appname', { type: String, required: true });
        this.appname = this._.camelize(this.appname);            
    },
    
    info : function () {        
        
        //Print some info
        console.log("== CEAN - Angular Controller Generator  ==");
        console.log("appname = " + this.appname);
        console.log("name = " + this.name);
    },
    
    askForFileName : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'filename',
                message : 'Controller File Name',
                default : this._.camelize(this.name) + "js"
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
                message : 'Controller Name',
                default : this.name
        }, function (answers) {
            this.log(answers.name);
            this.name = answers.name;
            done();
        }.bind(this));
    },
    
    controller : function () {
                  
        //Apply templates        
        this.template('_controller.js', 'public/scripts/controllers/' + this.filename);
    },

});