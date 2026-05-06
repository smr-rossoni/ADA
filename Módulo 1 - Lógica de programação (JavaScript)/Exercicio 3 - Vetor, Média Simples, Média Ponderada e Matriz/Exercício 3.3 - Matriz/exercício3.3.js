let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log("The matrix:", matrix)
console.log("The central element:", matrix[1][1])
let newElement = Number(prompt("Enter the new central element: "))
matrix[1][1] = newElement
console.log("The updated matrix:", matrix)