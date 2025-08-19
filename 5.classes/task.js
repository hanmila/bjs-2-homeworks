class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
        if(this.state > 100) {
            this.state = 100;
        }
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type =  "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const foundBook = this.books.find(book => book.name === bookName);

        if(!foundBook) {
            return null;
        } else {
            this.books = this.books.filter(book => book.name !== bookName);
            return foundBook;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if(mark < 2 || mark > 5) {
            return;
        }
        
        if(!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if(!this.marks.hasOwnProperty(subject)) {
            return 0;
        }

        let subjectMarks = this.marks[subject];

        if (subjectMarks.length === 0) {
            return 0;
        }

        const sum = subjectMarks.reduce((acc, mark) => acc + mark, 0);
        return sum / subjectMarks.length;
        }

    getAverage() {
        const subjects = Object.keys(this.marks);

        if (subjects.length === 0) {
            return 0;
        }

        const total = subjects.reduce((sum, subject) => {
            return sum + this.getAverageBySubject(subject);
        }, 0);

        return total / subjects.length;
    }
}
