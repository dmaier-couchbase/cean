# A Command Line Interface for CEAN

The idea is to provide a simple command line interface for application scaffolding. One of the advantages of using the CLI is that all the dependencie are installed locally with the CLI tool instead installing them globally to your Node.js installation.

## Reqirements

A Linux/Unix/MacOS environment with Node.js, Npm, Make, Git and GCC has to be installed, e.g.:

```
sudo apt-get install gcc
sudo apt-get install git
sudo apt-get make
sudo apt-get nodejs
sudo apt-get nodejs-legacy
sudo apt-get npm
```

## Installation

### From a release

```
npm install cean-cli
```

This installs 'cean-cli' to '$HOME/node_modules/cean-cli'. You should add this directory to your execution $PATH.

### Via the source code

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

Add it to your execution $PATH!


## How to use

The Cean CLI is bypassing commands. The command 'start' is referring to 'grunt'. The commands 'create' and 'add' are referring to 'yo'.

The following examples assume that you have added the 'cean-cli' folder to your execution PATH

```
export PATH=$HOME/node_modules/cean-cli:$PATH
```

and that you are in an application directory of your choice:

```
cd $APP_DIR
```


### Create a new application

The following command can be used to create a new application:

```
cean-cli create myapp 
```

### Sub-Generators

The following shows how to use sub-generators:

```
cean-cli add angular-controller TestCtrl myapp
cean-cli add angular-view test
cean-cli add angular-route test.html TestCtrl
```

### Start the application

```
cean-cli start
```
