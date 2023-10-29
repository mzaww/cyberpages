// JavaScript for displaying pop-up definitions
const definitionPopup = document.getElementById("definition-popup");
const termDefinition = document.getElementById("term-definition");

function openPopup(term, definition) {
    termDefinition.innerHTML = definition;
    definitionPopup.style.display = "block";
}

function closePopup() {
    definitionPopup.style.display = "none";
}

document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("definition")) {
        const term = e.target.getAttribute("data-term");
        // Replace this with actual definitions as needed
        let definition = "";
        switch (term) {
            case "two-factor authentication":
                definition = "Two-factor authentication (2FA) is an additional layer of security that requires you to provide two different authentication factors before gaining access to an account. This typically involves something you know (like a password) and something you have (like a mobile device).";
                break;
            // Add more cases for other terms
        }
        openPopup(term, definition);
    }
});
