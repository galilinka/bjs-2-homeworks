"use strict";

//Задача 1

let parseCount = (text) => {
    let digit = Number.parseInt(text);
      if (Number.isNaN(digit)){
        throw new Error('Невалидное значение');
      }
      return digit;  
  } 

  let validateCount = (text) => {
    try {
      parseCount(text);
      return digit;
    } 
    catch (err) {
      return err;
    }
    
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
      let per = this.a + this.b + this.c
       return per;
    }
  
    getArea(){
      let p = this.getPerimeter()/2;
      let area = +(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3);
      return area;
    }
  }
  
  // const triangle = new Triangle(6,10,15);
  // console.log(triangle);
  // console.log(triangle.getPerimeter());
  // console.log(triangle.getArea());

  let getTriangle = (a, b, c) => {
    try {
      return new Triangle(a, b, c);
    } catch { 
      // const triangle = {};
      // triangle.getPerimeter;
      // triangle.getArea; 
        return {
          getPerimeter() {
            return 'Ошибка! Треугольник не существует'
          },
          getArea() {
            return 'Ошибка! Треугольник не существует';
          }
        }; 
    }  
  }
  // function getTriangle(a, b, c) {
  //   try {
  //     return new Triangle(a, b, c);
  //   } catch {
  //     return {
  //       getPerimeter() {
  //         return 'Ошибка! Треугольник не существует'
  //       },
  //       getArea() {
  //         return 'Ошибка! Треугольник не существует';
  //       }
  //     };
  //   }
  // }
   
console.log(getTriangle(1,3,100));
console.log(triangle.getPerimeter());
console.log(triangle.getArea());