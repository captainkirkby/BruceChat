var count = 0;

$(document).ready(function(){
	//hides the chat area
	$("#chatArea").click(function(){
		$(this).hide();
	});

	//reloads the chat area
	$("#reloadChat").click(function(){
		$("#chatArea").replaceWith("<div id='chatArea'> Reloaded Chat: " 
			+ count + " </div>");
		count++;

		//resets the previous hide chat area function to work with new chatArea
		$("#chatArea").click(function(){
			$(this).hide();
		});
	});
});
