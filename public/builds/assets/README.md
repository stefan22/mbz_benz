Web Workflow (lighter new & improved!)
======================================

Overview:
---------

  Takes care of processing Sass, combining scripts and loading frameworks like <kbd>Bootstrap</kbd>, <kbd>JQuery</kbd>
  and <kbd>Angular</kbd> with       
  <kbd>Grunt.js</kbd> using <kbd>npm</kbd> and <kbd>bower</kbd>. <kbd>Sass</kbd>, <kbd>Compass</kbd> and <kbd>Susy</kbd> using bundle(ruby).

  
   
## Links to resources:
  
##### :bookmark:  <kbd>[sass documentation](http://sass-lang.com/)</kbd>
##### :bookmark:  <kbd>[angular documentation](https://angularjs.org/)</kbd>
##### :bookmark:  <kbd>[bootstrap documentation](http://getbootstrap.com/)</kbd>
##### :bookmark:  <kbd>[jQuery library](https://jquery.com/)</kbd>
##### :bookmark:  <kbd>[grunt documentation](http://http://gruntjs.com/)</kbd>
##### :bookmark:  <kbd>[npm documentation](https://www.npmjs.com/)</kbd>
##### :bookmark:  <kbd>[bower documentation](https://bower.io/)</kbd>
##### :bookmark:  <kbd>[ruby documentation](https://www.ruby-lang.org/en/)</kbd>
##### :bookmark:  <kbd>[bundler.io documentation](http://bundler.io/)</kbd>

<br />

> :package: __Plugins Included__:     
> __grunt-contrib-concat__, __grunt-contrib-connect__, __grunt-contrib-uglify__, __grunt-open__,          
> __grunt-contrib-watch__, __grunt-contrib-compass__, __grunt-watch__, __grunt-connect__ with __livereload__
> __matchdep__, __grunt-contrib-compass__, __grunt-cache-breaker__, __grunt-contrib-clean__


![workflow-folder screenshot](/workflow-folder.png?raw=true "workflow-folder")

<br />
## :one: Public/builds folder

   1.1  `public/['js'][sass]/, index.html`  => files to be process          
   1.2  `public/builds/` => files processed                 
   1.3   node_modules,bower_components (normally .ignore)                 

<br />
## :two: Sass ( using bundler)

   __1.1__ create a `Gemfile` with:

                 source 'https://rubygems.org'                           
                 gem 'sass'
                 gem 'compass'
                 gem 'susy'


   __1.2__ create __config.rb__    

```
            require 'susy'

            css_dir = '/public/builds/css'
            sass_dir = '/public/sass'
            javascript_dir = '/public/js'
            output_style = :expanded

```

   __1.3__ create __Gemfile__

```
             source 'https://rubygems.org'
             gem 'sass'
             gem 'compass'
             gem 'susy'

```
    

   __1.4__ type __$ gem install bundler__ 
                __bundle install__
                
                

   __1.5__ type  __npm install__ & __bower install__

<br />


## :three: Grunt

__3.1__     run each command individually.        
            :white_small_square:  Ex. grunt watch or grunt uglify          
      
        
__3.2__     run them all with default task.            
            :white_small_square:  Ex. grunt         
            :white_small_square:  view: http://localhost:9001         

 
<br />
<hr />
## :four: Installation:  

__4.1__     Download or clone this repository to a directory:  
            :white_small_square:  Mac or Windows: [workflow-folder](https://github.com/stefan22/workflow-folder.git)                   
     
__4.2__     Install dependencies      
   
<br />   
[:top:](https://github.com/stefan22/workflow-folder/blob/master/README.md)


