var UserObject=require('./../js/functions.js').userObj;

$(document).ready(function(){
	$('#time').text(moment());

	var currentUser=new UserObject();

	var fetchUserDetails=function(obj){
		var output="<table id=\"table\"><tr><th>Name of Repo: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Description</th></tr>";
		obj.forEach(function(objitem){
			var name=objitem.name;
			var desc="";
			if(objitem.description){
				desc=objitem.description;
			}
			else{
				desc="no description";
			}
			output+="<tr><td>"+name+"</td><td>"+desc+"</td></tr>";
		});
		output+="</table>";
		$('.userdetail').append(output);
	}
	
	//currentUser.getUserDetails("kitet",fetchUserDetails);
	//currentUser.getUserDetails("kitet",fetchUserDetails);
	$('#user').click(function(){
		var user_input=$('#userinput').val();
		$('#userinput').val("");
		$("#table").remove();
		currentUser.getUserDetails(user_input,fetchUserDetails);
	});
});
	