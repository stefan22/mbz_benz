#! /usr/bin/env node
require('gruntfile.js');


//there's alink-bin plugin
//https://www.npmjs.com/package/link-bin

(function() {

	console.log('made it to cli.js');

	//var grunt = require("gruntfile.js");
	//console.log(grunt);
	//need to require to export it
	function run() {
	 	var count = 0;
	 	for (var i=0; count < 2; i++) {	
			npm install -g bundler;
			npm install -g bundle;
	 		count++;
	 	} //for
	 	console.log("Im done");

	} //run 	

	


})();


	












// Made it to cli.js
// =============================
// Run -g grunt-init and npm install -g again to connect
// 		
//		#this is just other stuff i tried 
//		npm install -g grunt-init and 
// 		npm install -g grunt-cli
// 		npm install -g
// 		git clone https://github.com/gruntjs/grunt-init-node.git ~/.grunt-init/node
//
// Then set package.json to global and bin to js file
// Add shebang on top of file
// make sure it works - run grunt plugins again	