let totalGradesAverage = 3;
let sumAverage = 0;

for (let i = 1; i <= totalGradesAverage; i++) {
    let gradeAverage = Number(prompt("Enter grade:", i));
    sumAverage += gradeAverage;
}

let simpleAverage = sumAverage / totalGradesAverage;
console.log("Simple average of the grades:", simpleAverage)