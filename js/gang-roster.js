document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const gangName = document.getElementById('field1').value;
    const boss = document.getElementById('field2').value;
    const underboss = document.getElementById('field3').value;

    // Initialize the content with the gang name, boss, underboss, and role mention
    let content = `<@&1319795864822087865>\n\n**Gang Name:** ${gangName}\n\n**Boss:** ${boss}\n\n**Underboss:** ${underboss}\n\n`;

    // Loop through each pair of rank and member fields
    for (let i = 4; i <= 49; i += 2) {
        const rank = document.getElementById(`field${i}`).value;
        const member = document.getElementById(`field${i + 1}`).value;
        content += `**Rank:** ${rank}\n**Member:** ${member}\n\n`;
    }

    // Construct the message payload
    const payload = { content: content };

    // Send the payload to the Discord webhook
    fetch('https://discord.com/api/webhooks/1314135572490485792/TTTKuOvS4UJQhOqn44gnkh5ACuHsUQ9W1YpfvaF0qrQuz6dKawShZBILaph8SZpOpvhd', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert('Roster submitted successfully!');
			window.location.href = 'index.html'
        } else {
            alert('There was an error submitting the roster.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the roster.');
    });
});