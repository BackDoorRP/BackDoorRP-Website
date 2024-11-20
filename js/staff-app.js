document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Collect form data
        const formData = new FormData(event.target);
        let messages = [];
        let currentMessage = '';
        const h1Content = document.querySelector('#field1').innerText;
        let totalCharacters = h1Content.length + 2; // +2 for the line breaks added after the H1 content
        
        // Ensure the first message includes the H1 content
        currentMessage = `**Please review.**\n\n`;
        
        formData.forEach((value, key) => {
            const label = document.querySelector(`label[for="${key}"]`).innerText;
            const fieldText = `**${label}:**\n${value}\n\n`;
            totalCharacters += fieldText.length;
            if (totalCharacters > 18000) {
                alert('The total character limit for the form submission is 18,000 characters. Please reduce the content and try again.');
                return;
            }
            if ((currentMessage + fieldText).length <= 2000) {
                currentMessage += fieldText;
            } else {
                messages.push(currentMessage);
                currentMessage = fieldText;
            }
        });
        
        if (currentMessage.length > 0) {
            messages.push(currentMessage);
        }
        
        // Function to send a message to Discord
        function sendMessage(message, callback) {
            const payload = {
                content: message
            };
            
            const webhookURL = 'https://discord.com/api/webhooks/1308701702085410836/Ehv2mmya0qV4S6Q7V8nwNDN8sBzxaf-Hdh2v0dAiKW_V58g8RSQ5K8Tjupkf6tYqdDId';
            
            fetch(webhookURL, {
                method: 'POST',
                headers: {
    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (response.ok) {
    callback(); // Call the callback to send the next message
                } else {
    alert('There was an error sending the data. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending the data. Please try again.');
            });
        }
        
        // Function to send all messages sequentially
        function sendMessagesSequentially(messages) {
            if (messages.length === 0) {
                window.location.href = '/application-submitted.html';
                return;
            }
            
            sendMessage(messages.shift(), function() {
                sendMessagesSequentially(messages);
            });
        }
        
        sendMessagesSequentially(messages);
    });
    