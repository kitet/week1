var UserObject=require('./../js/functions.js').userObj;

$(document).ready(function(){
	$('.alert-warning').hide();
	$('.alert-success').hide();

	$('#time').text(moment());

	var currentUser=new UserObject();

	var fetchUserDetails=function(obj){
		if(obj){
			var output="<table class=\"table-responsive table-striped\"><tr><th>Name of Repo: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Description</th></tr>";
			obj.forEach(function(objitem){
			var name=objitem.name;
			var desc="";
			if(objitem.description){
				desc=objitem.description;
			}
			else{
				desc="no description";
			}
			output+="<tr><td><strong class=\"text-success\">"+name+"</strong></td><td class=\"text-primary\">"+desc+"</td></tr>";
			});
			output+="</table>";
			$('.userdetail').append(output);
			$('.alert-warning').hide();
			$('.alert-success').show().text("Fetching details successful");
		}
		else{
			$('.alert-warning').show().text("Error getting user repos");
			$('.alert-success').hide();	
		}
	}
	
	//currentUser.getUserDetails("kitet",fetchUserDetails);
	//currentUser.getUserDetails("kitet",fetchUserDetails);
	$('#user').click(function(){
		$(".table-responsive").remove();
		var user_input=$('#userinput').val();
		$('#userinput').val("");
		currentUser.getUserDetails(user_input,fetchUserDetails);
	});
});
	