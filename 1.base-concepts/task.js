"use strict";


function solveEquation(a, b, c) {
  let x;
  // код для задачи №1 писать здесь
  if (a==0){
    x = -(c/b);
    return [x];
  }

  let D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0){
    console.log("пустой массив");
    return [];
  }

  if (D == 0){       
    x = -b/(2*a);
    console.log("массив с одним корнем");
    return [x];
  }

  else if (D > 0){                     
    let x1 = (-b + Math.sqrt(D))/(2*a);
    let x2 = (-b - Math.sqrt(D))/(2*a);
    console.log("массив с двумя корнями");
    return [x1,x2]
  }

}
//console.log(solveEquation (1, 5, 6));







function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  let names = {
    0:'percent', 
    1:'contribution',
    2:'amount',
    3:'date'
  };

  for (let i = 0; i < arguments.length; i++){
    if (isNaN(parseInt(arguments[i]))){

      console.log(`${names[i]} содержит неправильное значение ${arguments[i]}`)
      return `${names[i]} содержит неправильное значение ${arguments[i]}`;
      
    }
  }

  let S = amount - contribution;
  let P = (percent/100)/12;
  totalAmount = (S * (P + P / (((1 + P)**date) - 1))*date).toFixed(2);

  console.log(totalAmount);

  return totalAmount;
}

//calculateTotalMortgage('b', 0, 50000, 12);