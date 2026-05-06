function average(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i]; 
  }
  return sum / grades.length;
}

let result = average([7, 8, 10]); 
console.log("A média é: " + result.toFixed(2));