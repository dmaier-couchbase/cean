'use strict';

//Import the base generator module
var path = require('path');
var gens = require('yeoman-generator');

//Extend the base generator
module.exports = gens.Base.extend({
    
    constructor: function () {
        
        //Call the super constructor
        gens.Base.apply(this, arguments);
                
        //Arguments
        this.argument('appname', { type: String, required: true });
        this.appname = this._.camelize(this.appname);        
        
        this.host = "localhost";
        this.bucket = "default";
        this.password = "";
    
    },
    
    info : function () {        
        
        //Print some info
        console.log("== This is the Couchbase CEAN generator ==");
        console.log("appname = " + this.appname);
    },
    
    askForHost : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'host',
                message : 'Your Couchbase Host',
                default : this.host
        }, function (answers) {
            this.log(answers.host);
            this.host = answers.host;
            done();
        }.bind(this));
    },
    
    askForBucket : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'bucket',
                message : 'Your Couchbase Bucket',
                default : this.bucket
        }, function (answers) {
            this.log(answers.bucket);
            this.bucket = answers.bucket;
            done();
        }.bind(this));
    },
    
    askForPassword : function () {
        
        var done = this.async();
        this.prompt({
                type    : 'input',
                name    : 'password',
                message : 'Your Couchbase Bucket Password',
                default : this.password
        }, function (answers) {
            this.log(answers.password);
            this.password = answers.password;
            done();
        }.bind(this));
    },
    
    baseapp : function () {
      
        this.template('_bower.json', 'bower.json');
        this.template('_package.json', 'package.json');
        this.copy('_Gruntfile.js', 'Gruntfile.js');
    },
    
    serverapp : function () {
      
        //Create a routes folder
	this.mkdir('routes');

	//Copy files 		
        this.copy('server/_app.js', 'app.js');
	this.copy('server/_helper.js', 'helper.js');
	this.copy('server/_route_demo.js', 'routes/demo.js');
	
	//Apply templates
	this.template('server/_cb.js', 'cb.js');
    },
    
    clientapp : function () {
                     
        //Create the project directory structure
        this.mkdir('public');
        this.mkdir('public/images');
        this.mkdir('public/scripts');
        this.mkdir('public/scripts/controllers');
        this.mkdir('public/scripts/services');
        this.mkdir('public/styles');
        this.mkdir('public/views');
        
        //Copy files
        this.copy('client/_404.html', 'public/404.html');
        this.copy('client/_favicon.ico', 'public/favicon.ico');
        this.copy('client/_robots.txt', 'public/robots.txt');
        this.copy('client/images/_cb.png', 'public/images/cb.png');
        this.copy('client/images/_yeoman.png', 'public/images/yeoman.png');
        this.copy('client/styles/_main.css', 'public/styles/main.css');
            
        
        //Apply templates        
        this.template('client/_index.html', 'public/index.html');
        this.template('client/scripts/_app.js', 'public/scripts/app.js');
        this.template('client/scripts/controllers/_main.js', 'public/scripts/controllers/main.js');
        this.template('client/scripts/controllers/_mycontroller.js', 'public/scripts/controllers/mycontroller.js');
        this.template('client/scripts/services/_main.js', 'public/scripts/services/main.js');
        this.template('client/scripts/services/_myservice.js', 'public/scripts/services/myservice.js');
        this.template('client/views/_footer.html', 'public/views/footer.html');
        this.template('client/views/_header.html', 'public/views/header.html');
        this.template('client/views/_main.html', 'public/views/main.html');    
    },

    writing: function() {
        //Gruntfile.js cleverness can go here.
    },

    installDeps : function() {
        
        this.installDependencies();
        
    }
});
