"use strict";

//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) { 
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }


fix() {
    this.state *=1.5;
}

set state (num) {
    if (num < 0){
        this._state = 0;
    } 
    if (num > 100) {
        this._state = 100;
    }
    else {
        this._state = num;
    }
}

get state (){
    return this._state;
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state)
        this.type = "magazine";
    }
}



class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = "detective";
    }
}



//Задача 2

class Library extends PrintEditionItem{
    constructor (name){
        super ();
        this.name = name;
        this.books = [];
    }


    addBook(book){
        if (this.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let myBook = null;
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i][type] == value){
                myBook = this.books[i];
                break;
            }
        }
          return myBook;  

    }

    giveBookByName(bookName) {
        let myBook = null;
        
        for (let i = 0; i < this.books.length; i++){
            if (bookName === this.books[i].name){

                 console.log('name', this.books[i].name);
  
            }
        }
    }
}

