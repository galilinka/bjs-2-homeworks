"use strict";

//Задача 1

const compareArrays = (arr1, arr2) => 
arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);


//Задача 2

function advancedFilter(arr) {
  
  console.log(
    arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item*10)
  )
  
  }
