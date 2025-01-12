document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault();
	var textareaContent = document.getElementById('field1').value;
	var webhookUrl = 'https://discord.com/api/webhooks/1328089531081035856/UYAMYPjrrfzPbni4dTDpGMcZljhFIF_V5s0f7OnXsJF6oPyVOI38wMF5evsJ3rfeM9MT';
                
	var request = new XMLHttpRequest();
	request.open('POST', webhookUrl, true);
	request.setRequestHeader('Content-Type', 'application/json');
	request.send(JSON.stringify({
		content: textareaContent
		}));

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			window.location.href = 'index.html';
			} else {
				alert('Failed to send message to Discord webhook.');
			}
		};
	});