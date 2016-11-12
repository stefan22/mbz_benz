# Install the Heroku CLI

Download and install the Heroku CLI.           

>  If you haven't already, log in to your Heroku account and follow the prompts to
>   create a new SSH public key.    

```
   $ heroku login

```

## Create a new Git repository

Initialize a git repository in a new or existing directory

```
	$ cd my-project/
	$ git init
	$ heroku git:remote -a workflow-folder

```

## Deploy your application

Commit your code to the repository and deploy it to Heroku using Git.

```
$ git add .
$ git commit -am "make it better"
$ git push heroku master

```

## Existing Git repository

For existing repositories, simply add the __heroku__ remote

```
$ heroku git:remote -a workflow-folder

```
## Download and install Heroku CLI

1. Download and run the OS X installer.

2. To verify your CLI installation use the heroku --version command.

```

	$ heroku --version
	heroku-toolbelt/3.43.9 (x86_64-darwin10.8.0) ruby/1.9.3
	heroku-cli/5.2.39-010a227 (darwin-amd64) go1.6.2

```

