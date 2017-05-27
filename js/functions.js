//require api to make requests
var mykey=require('./../.env').apiKey;
//create a prototype onkect that shall be inherited from the ui

function UserObject(){
}

UserObject.prototype.getUserDetails=function(username,rUser){
	var url='https://api.github.com/users/'+username+'/repos?access_token='+mykey;
	$.get(url)
	.then(function(response){
		rUser(response);
	})
	.fail(function(){
		console.log("Error getting user details");
	});
}

exports.userObj=UserObject;
