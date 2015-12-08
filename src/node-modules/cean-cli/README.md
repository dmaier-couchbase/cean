# A Command Line Interface for CEAN

The idea is to provide a simple command line interface for application scaffolding. One of the advantages of using the CLI is that all the dependencie are installed locally with the CLI tool instead installing them globally to your Node.js installation.

## Reqirements

A Linux/Unix/MacOS environment with Node.js and NPM has to be installed.


## Installation

Check out the code:

```
git clone https://github.com/dmaier-couchbase/cean.git

```

Change the directory to:

```
cd /src/node-modules/cean-cli
```

Run the installation script:

```
./cean-cli install
```

Add it to your PATH!


## How to use

The Cean CLI is bypassing commands to Yeoman commands. 

### Create a new application

The following command can be used to create a new application:

```
cd $APP_DIR
./cean-cli create myapp 
```

### Sub-Generators

The following shows how to use sub-generators:

```
cd $APP_DIR
./cean-cli add angular-controller TestCtrl myapp
./cean-cli add angular-view test
./cean-cli add angular-route test.html TestCtrl
```

### Start the application

```
cd $APP_DIR
./cean-cli start
```
