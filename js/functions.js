//require api to make requests
var apikey=require('./../.env').apiKey;
//create a prototype onkect that shall be inherited from the ui

function UserObject(){

}


UserObject.prototype.getUserDetails=function(username, displayDetails){
	$.get('https://api.github.com/users/kitet?access_token=5d2ea9cadd9940e3be8ccc669e1de77b567455fc').then(function(response){
		console.log("HJHHD");
		displayDetails(response['name'],response['email']);
	});
}

exports.userObject=UserObject;
