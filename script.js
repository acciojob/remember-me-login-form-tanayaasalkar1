
let btn = document.getElementById('submit');
let username = document.getElementById('username');
let password = document.getElementById('password');
let existing = document.getElementById('existing');
let remember = document.getElementById('checkbox');

// Initially hide the button
existing.style.display = "none";

btn.addEventListener('click', () => {

    alert(`Logged in as ${username.value}`);

    if (remember.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);

        // Show button only after saving credentials
        existing.style.display = "block";

    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existing.style.display = "none";
    }
});

// Existing user button
existing.addEventListener('click', () => {
    let savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});
