document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const countdownDiv = document.getElementById("countdown");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const data = new FormData(form);
        let content = "<@&1301077852149645394>\n";
        
        const parts = [];
        for (let [key, value] of data.entries()) {
            const label = form.querySelector(`label[for="${key}"]`).innerText;
            const entry = `**${label}**\n${value}\n\n`;
            if ((content.length + entry.length) > 1950) {
                parts.push(content);
                content = '';
            }
            content += entry;
        }
        if (content) parts.push(content);

        const webhookUrl = "https://discord.com/api/webhooks/1328089906618044457/b5pQS-f4PFYoRjjRpgt8DYzqVByyPoyPr8KUhcfcCGzQgRvYsw2kEs7jbQlqGIqR-uhy";
        const totalTime = parts.length * 2;
        let remainingTime = totalTime;

        const countdownInterval = setInterval(() => {
            countdownDiv.innerText = `Sending application, keep with window open! Time remaining: ${remainingTime} seconds`;
            remainingTime--;
            if (remainingTime < 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);

        parts.forEach((part, index) => {
            setTimeout(() => {
                fetch(webhookUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ content: part }),
                });
            }, index * 2000);
        });

        // Hide the wrapper and show the application-submitted divs
        document.querySelector('.wrapper').style.display = 'none';
        document.querySelector('.application-submitted').style.display = 'block';
    });
});