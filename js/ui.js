var UserObject=require('./../js/functions.js').userObject;

$(document).ready(function(){

	$('#time').text(moment());

	var userObj=new UserObject();

	var displayUserDetails=function(username, desc){
		console.log("check her");
	}
	$("#showuser").click(function(){
		userObj.getUserDetails("kitet", displayUserDetails);
	});
});
