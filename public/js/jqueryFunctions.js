$(document).ready(function(){
	//hides the chat area
	$("#chatArea").click(function(){
		$(this).hide();
	});

	//reloads the chat area
	$("#reloadChat").click(function(){
		var jqXHR = $.ajax("/chat")
		jqXHR.done(function(data){
			$("#chatArea").replaceWith("<div id='chatArea'>" 
			+ data + " </div>");
		})

		//resets the previous hide chat area function to work with new chatArea
		$("#chatArea").click(function(){
			$(this).hide();
		});
	});
});
