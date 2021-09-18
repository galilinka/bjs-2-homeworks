"use strict";

//Задача 1

let parseCount = (text) => {
    let digit = Number.parseInt(text);
      if (Number.isNaN(NaN)){
        throw new Error('Невалидное значение');
      }
      return Number.parseInt(text);  
  } 

  let validateCount = (text) => {
    try {
      parseCount(text);
    } 
    catch (err) {
      return err;
    }
    return text;
 }

 //Задача 2

 class Triangle {
    constructor (a, b, c){
      this.a = a;
      this.b = b;
      this.c = c; 
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
    }
  
    getPerimeter(){
       return a + b + c;
    }
  
    getArea(){
      let p = getPerimeter()/2;
      let area = Math.sqrt(p*(p-a)*(p-b)*(p-c)).toFixed(3);
    }
  }
  
  let getTriangle = (a, b, c) => {
    try {
      return new Triangle;
    }
    catch ({getArea, getPerimeter}) {
        return "Ошибка! Треугольник не существует"
    }   
  }