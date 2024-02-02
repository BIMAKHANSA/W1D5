// jangan ubah isi variabel dibawah
let row = 3;
let coordinate = "23";

// write your code here
 for (let i =1; i <= rows; i++) {
    for (let j = 1; j <= cols; J++) {
        if (i === parseInt(coordinate[0]) && j === parseInt(coordinate[1])) {
            result += '*';
        } else {
            result += '#';
        }
    }
    result += '\n';
 }


let row2 = 5
let coordinate2 = "45"


for (let i =1; i <= rows; i++) {
    for (let j = 1; j <= row2; J++) {
        if (i === parseInt(coordinate[0]) && j === parseInt(coordinate[1])) {
            result += '*';
        } else {
            result += '#';
        }
    }
    result += '\n';
}

console.log(result)


let row3 = 1
let coordinate3 = "11"

for (let i =1; i <= rows; i++) {
    for (let j = 1; j <= row3 + 4; j++) {
        if (i === parseInt(coordinate[0]) && j === parseInt(coordinate[1])) {
            result += '*';
        } else {
            result += '#';
        }
    }
 }