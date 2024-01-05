const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

function logIt() {
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(password.value);
}

document.getElementById("submitBTN").addEventListener("click", () => {
  logIt();
});

document.getElementById("clear").addEventListener("click", () => {
  [...(document.getElementById("firstName").value = "")];
  [...(document.getElementById("lastName").value = "")];
  [...(document.getElementById("email").value = "")];
  [...(document.getElementById("password").value = "")];
  console.log("clear");
});
