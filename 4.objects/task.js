"use strict";

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);



Student.prototype.setSubject = function (subjectName) {
  console.log(this.subject = subjectName);
}

Student.prototype.addMark = function (mark) {
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

Student.prototype.getAverage = function (arr) {
  for (let i = 0, sum = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum/i;

  this.average= arr;
}

Student.prototype.exclude = function (reason) {
  console.log(this.exclude = reason);
  delete Student.subject; 
  delete Student.marks; 
}
