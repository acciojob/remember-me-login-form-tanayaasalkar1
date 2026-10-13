
let btn = document.getElementById('submit');
let username = document.getElementById('username');
let password = document.getElementById('password');
let existing = document.getElementById('existing');
let remember = document.getElementById('checkbox');

// Show existing user button if saved credentials exist
let savedUsername = localStorage.getItem("username");
let savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existing.style.display = "block";
}

btn.addEventListener('click', () => {
    alert(`Logged in as ${username.value}`);

    if (remember.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});

// Existing user button click
existing.addEventListener('click', () => {
    let savedUsername = localStorage.getItem("username");

    alert(`Logged in as ${savedUsername}`);
});
