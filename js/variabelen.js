let numbers = [ 1, 100, 100, 100, 100 ];
let sum = 0;

for (let i = 0; i < numbers.length; i = i + 1) { // i = 5
  sum = sum + numbers[i];                        // sum = 401 
}

console.log(sum);