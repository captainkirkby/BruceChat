$(document).ready(function(){
	//hides the chat area
	$("#chatArea").click(function(){
		$(this).hide();
	});

	//reloads the chat area
	$("#reloadChat").click(function(){
		$("#chatArea").replaceWith("<div id='chatArea'>Reloaded Chat</div>");
	})
});
