// Jangan merubah isi variabel di bawah
let exercise = "<>^v>>>";
let userInput = "<>^^>><";

// code here
let score =0;
let totalChars = exercise.length;

for (let i =0; i< totalChars; i++) {
    if(exercise[i] === userinput[i]) {
        score += 10;
    }
}

let percentage =(score / (totalChars * 10)) * 100;

 let category;
 if(percentage >= 90) {
    category = "Excellent";
 } else if (percentage >= 70) {
    category ="Good";
 } else if (percentage >= 50) {
    category ="Average";
 } else {
    category ="Below Average";
 }

 console.log('Anda mendapatkan score ${score} / ${totalChars * 10}. Persentase: %{percentage}%, Kategori: ${category}')

 // 
 let exercise2 = '<>^v'
let userInput2 = '<>^v'

 let category2;
 if(percentage >= 100) {
    category = "Perfect";
 } else if (percentage >= 90) {
    category ="Excellent";
 } else if (percentage >= 70) {
    category ="Average";
 } else {
    category ="Below Average";
 }

 console.log('Anda mendapatkan score ${score} / ${totalChars * 10}. Persentase: %{percentage}%, Kategori: ${category}')


var exercise3 = '<>^v'
var userInput3 = '<'

if (userInput3.length < exercise3.length) {
    console.log('Input yang anda masukkan tidak lengkap');
}
