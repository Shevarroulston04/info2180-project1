/* Add your JavaScript to this file */
window.onload = function() {

    const form = document.querySelector(".newsletter form");
    const emailField = document.querySelector("#email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = emailField.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "white";
        } else {
            messageDiv.textContent =
                `Thank you! Your email address "${email}" has been added to our mailing list!`;
            messageDiv.style.color = "white";
        }

        emailField.value = "";
    });

};