"use strict";

// Задание 1
function getArrayParams(arr) {
let min = 0;
let max = 0;
let avg = 0;
let total = 0;

  // Ваш код

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }

    if (arr[i] < min){
      min = arr[i];
    }

    total = total + arr[i];
  }

  avg = +(total/arr.length).toFixed(2);

  return { min, max, avg};
}

//console.log(getArrayParams([-99, 99, 10]));


// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let temp;

  for (let i = 0; i < arrOfArr.length; i++){
    temp = func(arrOfArr[i]);
    if(temp > max){
      max = temp;
    }
  }
  
  return max
}

let a = [[1,5,100], [4,5,6]];
console.log(makeWork(a, worker2));

// Задание 3
function worker2(arr) {
  let min = 0;
  let max = 0;
  let temp = [];

   for (let i = 0; i < arr.length; i++){
     temp.push(Math.abs(arr[i]));
   }

   temp = temp.sort((a,b) => a - b);

   min = temp[0];
   max = temp[temp.length - 1];

   return max - min

}


