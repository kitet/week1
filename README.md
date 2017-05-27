## Week 1 Porject: Github User's Repo Look-Up

Author: [kitet](https://github.com/kitet)

- A website project that retrives public repositories of a github user(input as username) using github API that requires api key

## Keywords(Tech Used)
	npm, bower, gulp, botstrap, html5


## How to Run and Changes to Effect Before Running
 
 1. Clone:
 ```
 git clone 
 ```
 
 2. Create Github API key:
 	- Go settings of account.
 	- Select Personal Access Tokens from the sidebar, and hit Generate New Token.
 	- Select Generate Token without any selection on list given. 

 3. Save you key on a .env file with _export.apiKey_ variable:
 ```
 	exports.apiKey = "YOUR_API_KEY";
 ```

 4. Install dependencies to run (should have node.js installed):
 ```
 	npm install and bower install
 
 5. Build the project:
 ```
 	gulp build && gulp serve
 	```

 6.Deploy on any browser
