const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbzly5-jGiGOBhmBwidX-sm9_gsuMo7m_O_SEgxmMMuSrl0wVGxOZwexZLRSKvVci9Cp/exec", {
                        method: "POST",
                        body: new URLSearchParams(data)
                });
                const responseText = await response.text();
                alert(responseText);
                form.reset();
        }
        catch (error) {
                alert(error);
        }
});