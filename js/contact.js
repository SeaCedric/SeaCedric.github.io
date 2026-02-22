document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    if (!form) return;

    const status = document.getElementById("form-status");
    const btn = document.getElementById("submit-btn");
    const loader = document.querySelector(".btn-loader");
    const btnText = document.querySelector(".btn-text");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        btn.disabled = true;
        btnText.style.display = "none";
        loader.style.display = "inline-block";

        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xwvnrdrn", {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                status.innerHTML = "✓ Message sent successfully.";
                status.style.color = "#0a7f42";
                form.reset();
            } else {
                throw new Error("Form error");
            }

        } catch (error) {
            status.innerHTML = "⚠ Something went wrong. Please try again.";
            status.style.color = "#c0392b";
        }

        status.style.opacity = 1;
        loader.style.display = "none";
        btnText.style.display = "inline";
        btn.disabled = false;
    });
});