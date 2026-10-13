//your JS code here. If required.
let btn = document.getElementById('submit');
let username = document.getElementById('username');
let password = document.getElementById('password');
let existing = document.getElementById('existing');
let remember = document.getElementById('checkbox');

btn.addEventListener('click', ()=>{
  alert(`Logged in as ${username.value}`)
  if(checkbox.checked){
    localStorage.setItem("username ", username.value);
    localStorage.setItem("password ", password.value);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
})

if(localStorage.getItem(username.value) && localStorage.getItem(password.value)){
  existing.style.display = "block";
  alert(`Logged in as ${username.value}`);
}