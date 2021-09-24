"use strict";

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);



Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [];
  }
    this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){ 
    this.marks = [];
    } else {
      for (let i = 0; i < marks.length; i++){
        this.marks.push(marks[i]);
      }
    }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++){
    sum += this.marks[i];
  }
  return sum/this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject; 
  delete this.marks; 
}

// let student1 = new Student("Tony", "male", 37);
// student1.setSubject("Algebra");
// student1.addMark(5);
// student1.addMark(4);
// student1.addMark(5);
// console.log(student1.getAverage()); //4.6666
// console.log(student1);




