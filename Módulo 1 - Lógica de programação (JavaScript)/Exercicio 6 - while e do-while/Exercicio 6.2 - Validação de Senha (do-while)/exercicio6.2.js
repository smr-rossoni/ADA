const correctPassword = "StartCoding";
let tries = 0;
const maxTries = 3;
let access = false;
let answer;

const startTime = Date.now(); // marca o início da operação

do {
  //answer = prompt("You have " + (maxTries - tries) + " tries. Enter password.");
  tries += 1; // contador de tentativas

  if (answer == correctPassword) {
    alert("Password is correct.");
    access = true;
    break;
  } else if (tries == maxTries) {
    alert("You have exceeded the maximum number of tries.");
  } else {
    alert("Incorrect password.");
  }

} while (tries < maxTries && !access);

const endTime = Date.now(); // fim da operação
const totalTime = (endTime - startTime) / 1000; // em segundos

if (access) {
  alert("The access is permitted.");
} else {
  alert("The account has been blocked.");
}

alert("Operation time: " + totalTime + " seconds.");