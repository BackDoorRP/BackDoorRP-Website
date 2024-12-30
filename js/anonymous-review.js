document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault();
	var textareaContent = document.getElementById('field1').value;
	var webhookUrl = 'https://discord.com/api/webhooks/1322776498507092009/G1S0C-4w1OhXjl-TssHyyZS5Jjxtk1Vd5yW_FWbCd-HXG9fMrEpNe6a8iA_yfV0XFY4X';
                
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