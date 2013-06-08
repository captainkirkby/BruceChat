$(document).ready(function(){
	//hides the chat area
	$("#chatArea").click(function(){
		$(this).hide();
	});

	$("#chatTextForm").submit(function(){
		var chatText = $("#chatTextInput").val();
		alert(chatText);

		//reload chat window
		var jqXHR = $.ajax("/chat")
		jqXHR.done(function(data){
			$("#chatArea").replaceWith("<div id='chatArea'>" 
			+ data + " </div>");
		});

		//send this data back to the server
		$.ajax({
			type : "POST",
			data : {
				"message" : chatText
			}
		});

		//reset chatTextInput text
		$("#chatTextInput").val("");
		return false;
	});

	//reloads the chat area
	$("#reloadChat").click(function(){
		var jqXHR = $.ajax("/chat")
		jqXHR.done(function(data){
			$("#chatArea").replaceWith("<div id='chatArea'>" 
			+ data + " </div>");
		});

		//resets the previous hide chat area function to work with new chatArea
		$("#chatArea").click(function(){
			$(this).hide();
		});
	});
});
