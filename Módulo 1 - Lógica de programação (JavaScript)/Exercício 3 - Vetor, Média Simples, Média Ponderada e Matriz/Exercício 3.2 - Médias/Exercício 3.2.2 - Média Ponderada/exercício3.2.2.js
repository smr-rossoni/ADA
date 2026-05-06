let sumGradesWeighted = 0;
let sumWeight = 0;

for (let i = 1; i <= 3; i++) {
    let GradesWeighted = Number(prompt("Enter the grade:", i));
    let Weight = Number(prompt("Enter the weight of the grade (Ex: 20 for 20%):", i));
    
    sumGradesWeighted += (GradesWeighted * Weight);
    sumWeight += Weight;
}

let weightedAverage = sumGradesWeighted / sumWeight;
console.log("The weight average:", weightedAverage.toFixed(2))