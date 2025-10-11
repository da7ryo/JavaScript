function checkRange(a) {
  return a >= 10 && a <= 20
    ? "The number is in the range 10-20."
    : a > 20 && a <= 30
    ? "The number is in the range 21 - 30"
    : "The number is not in the range";
}

console.log(checkRange(25));

function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(1, 3, 5));

function maxOfThree(a, b, c) {
  return a >= b && a >= c ? a : b >= a && b >= c ? b : c;
}

console.log(maxOfThree(10, 5, 8));

const aprove = maxOfThree;

if (aprove >= 50) {
  console.log("You can change the job");
} else {
  console.log("You canot change the job");
}

function canDrive(a) {
  if (a < 18) {
    return "You cannot drive";
  } else if (a >= 18 && a < 70) {
    return " You can drive";
  } else {
    return "You must make check by doctor!";
  }
}

console.log(canDrive(55));
console.log(canDrive(88));
console.log(canDrive(12));

function testReturn(x) {
  console.log("Funkcija je počela...");

  if (x > 10) {
    console.log("Ušao u prvi if...");
    return "Veće od 10"; // ovdje se funkcija završava!
  }
  console.log("Ova linija se preskače ako je prvi if bio true");
}

console.log(testReturn(12));

const numm = 5;
function guessGame(userNumber) {
  if (userNumber === numm) {
    return "You guesst it";
  } else if (userNumber < numm) {
    return "The number is bigger than your guess";
  } else {
    return "The number is smaller than your guess";
  }
}

console.log(guessGame(4));
