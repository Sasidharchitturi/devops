document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    // Constraints
    if (firstName.length < 2) {
        alert("First name must be at least 2 characters long.");
        return;
    }

    if (lastName.length < 2) {
        alert("Last name must be at least 2 characters long.");
        return;
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    const phoneRegex = /^\\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    if (address.trim() === "") {
        alert("Address cannot be empty.");
        return;
    }

    alert("Registration successful!");
});
