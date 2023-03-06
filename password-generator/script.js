const generateBtn = document.getElementById("generate");
const passwordField = document.getElementById("password");
generateBtn.addEventListener("click", () => {
  const length = document.getElementById("length").value;
  const uppercase = document.getElementById("uppercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  const password = generatePassword(length, uppercase, numbers, symbols);
  passwordField.value = password;
});

function generatePassword(length, uppercase, numbers, symbols) {
  let charset = "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) charset += "0123456789";
  if (symbols) charset += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}