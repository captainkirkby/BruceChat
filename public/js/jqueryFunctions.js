$(document).ready(function(){
	$("#chatTextForm").submit(function(){
		var chatText = $("#chatTextInput").val();
		//alert(chatText);

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
	var jqXHR = $.ajax("/chat")
	jqXHR.done(function(data){
		$("#chatArea").replaceWith("<div id='chatArea'>" 
		+ data + " </div>");
	});
});
