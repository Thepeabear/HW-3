const generateBtn = document.createElement("button");
generateBtn.setAttribute("id", "generate");
generateBtn.textContent = "Generate Password";
console.log(generateBtn);

const generator = document.querySelector(".generator");
if (generator) {
  generator.appendChild(generateBtn);
}
let password = "";
let charSet = "";

generateBtn.addEventListener("click", function () {
  let passwordLength = prompt(
    "How many characters would you like your password to contain? (8-128)"
  );

  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8-128 characters.");
    return;
  }

  let includeLowercase = confirm(
    "Do you want to include lowercase letters in your password?"
  );

  let includeUppercase = confirm(
    "Do you want to include uppercase letters in your password?"
  );

  let includeNumbers = confirm(
    "Do you want to include numbers in your password?"
  );

  let includeSpecialChars = confirm(
    "Do you want to include special characters in your password?"
  );

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>/?";

  //let password = "";

  //let charSet = "";

  if (includeLowercase) {
    charSet += lowercaseChars;
  }

  if (includeUppercase) {
    charSet += uppercaseChars;
  }

  if (includeNumbers) {
    charSet += numberChars;
  }

  if (includeSpecialChars) {
    charSet += specialChars;
  }

  // Generate password by randomly selecting characters from the character set
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  // Output generated password to console
  console.log(password);
  const userPassword = document.querySelector("#password");

  userPassword.appendChild(document.createTextNode(password));
});
