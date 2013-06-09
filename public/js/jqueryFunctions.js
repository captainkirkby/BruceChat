$.fn.reloadChatArea = function(){
	//reloads the chat area
	var jqXHR = $.ajax("/chat")
	jqXHR.done(function(data){
		$("#chatArea").replaceWith("<div id='chatArea'>" 
		+ data + " </div>");
	});
}

$(document).ready(function(){
	$.fn.reloadChatArea();

	$("#chatTextForm").submit(function(){
		var chatText = $("#chatTextInput").val();
		//alert(chatText);

		//reloads the chat area
		$.fn.reloadChatArea();

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

	setInterval($.fn.reloadChatArea, 500);
});
