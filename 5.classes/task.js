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
}

fix() {
    state = state * 1.5;
}

set state (num) {
    if (num < 0){
        state = 0;
    } 
    if (num > 100) {
        state = 100;
    }
    else {
        state = num;
    }
}

get state (){
    return this.state;
}
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state)
        this.type = "magazine";
    }
}

const 

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state)
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author)
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author)
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author)
        this.type = "detective";
    }
}


//Задача 2

class Library {
    constructor (name, books){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){

    }

    giveBookByName(bookName) {
        
    }
}