$.fn.reloadChatArea = (function(){
	//reloads the chat area
	var jqXHR = $.ajax("/chat");
	jqXHR.done(function(data){
		var chatHTML = "";
		chatHTML += "<div id='chatArea'>";
		$.each(JSON.parse(data), function(key, value){
			chatHTML += "<span class='message'>";
				// chatHTML += "<span class='sender'>";
				// chatHTML += value.sender;
				// chatHTML += ": ";
				// chatHTML += "</span>";
				chatHTML += ">";
				chatHTML += "<span class='message'>";
					chatHTML += value.content;
				chatHTML += "</span>";
			chatHTML += "</span>";
			chatHTML += "<br/>";
		});
		chatHTML += "</div>";
		$("#chatArea").replaceWith(chatHTML);
	});
});

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
				"message" : {
					"sender"	: "ME",
					"content"	: chatText
				}
			}
		});

		//reset chatTextInput text
		$("#chatTextInput").val("");
		return false;
	});

	setInterval($.fn.reloadChatArea, 500);
});
