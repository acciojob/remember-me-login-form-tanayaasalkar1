
let btn = document.getElementById('submit');
let username = document.getElementById('username');
let password = document.getElementById('password');
let existing = document.getElementById('existing');
let remember = document.getElementById('checkbox');

// Check localStorage when page loads
let savedUsername = localStorage.getItem("username");
let savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existing.style.display = "block";
} else {
    existing.style.display = "none";
}

// Submit button
btn.addEventListener('click', (event) => {
    event.preventDefault();

    alert(`Logged in as ${username.value}`);

    if (remember.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);

        existing.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existing.style.display = "none";
    }
});

// Existing user button
existing.addEventListener('click', (event) => {
    event.preventDefault();

    let savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});
