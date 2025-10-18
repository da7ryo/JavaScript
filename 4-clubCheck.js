function clubCheck(name, age, exercise) {
  if (age < 18) {
    return `Sorry ${name}, you are too young for this program`;
  } else if (age >= 18 && exercise.length >= 3) {
    return `Great job ${name}! You have good workout plan`;
  } else {
    return `Keep going ${name}! Try adding more exercise`;
  }
}

console.log(clubCheck("Ana", 15, ["squats", "push-ups"]));
console.log(clubCheck("Marko", 20, ["running", "cycling", "plank"]));
console.log(clubCheck("Ivana", 18, ["yoga"]));
