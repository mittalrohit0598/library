function Book(title, author, NoOfPages, readYet) {
    this.title = title;
    this.author = author;
    this.NoOfPages = NoOfPages;
    this.readYet = readYet;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.NoOfPages + " pages, " + (readYet ? "already read" : "not read yet");
    }
}

let hobbit = new Book("abc", "def", 123, false);
let hobbit2 = new Book("xyz", "ghi", 123, false);
let hobbit3 = new Book("qrst", "lmn", 123, false);

let myLibrary = [];

myLibrary.push(hobbit);
myLibrary.push(hobbit2);
myLibrary.push(hobbit3);

console.log(myLibrary)

let toggleForm = function() {
    let formDiv = document.getElementById("add-book-form");
    let booksDiv = document.getElementById("books");
    let filterDiv = document.getElementById("filter");
    formDiv.style.display = formDiv.style.display == "none" || formDiv.style.display.length == 0 ? "block" : "none";
    booksDiv.style.display = booksDiv.style.display == "none" ? "flex" : "none"
    filterDiv.style.display = filterDiv.style.display == "none" ? "block" : "none"
    this.value = this.value == "Add a book" ? "Show books" : "Add a book";
}

let deleteBook = function() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    myLibrary.splice(this.parentNode.dataset.index, 1);
    updateIndex();
    console.log(myLibrary);
}

let updateIndex = function() {
    document.querySelectorAll(".card").forEach((book, i) => {
        book.dataset.index = i;
    })
}

let toggleReadStatus = function() {
    myLibrary[this.parentNode.dataset.index].readYet = !myLibrary[this.parentNode.dataset.index].readYet
    console.log(myLibrary[this.parentNode.dataset.index].readYet)
}

window.onload = function() {
    myLibrary.forEach((book, i) => {
        let cardDiv = document.createElement("div");
        cardDiv.className = "card";
        let titleDiv = document.createElement("div");
        titleDiv.className = "title";
        titleDiv.innerHTML = book.title;
        let authorDiv = document.createElement("div");
        authorDiv.className = "author";
        authorDiv.innerHTML = book.author;
        let deleteButton = document.createElement("input");
        deleteButton.value = "Delete";
        deleteButton.type = "button"
        deleteButton.addEventListener('click', deleteBook, false);
        let changeStatusButton = document.createElement("input");
        changeStatusButton.value = "ChangeReadStatus";
        changeStatusButton.type = "button"
        changeStatusButton.addEventListener('click', toggleReadStatus, false);
        cardDiv.appendChild(titleDiv);
        cardDiv.appendChild(authorDiv);
        cardDiv.appendChild(deleteButton);
        cardDiv.appendChild(changeStatusButton);
        cardDiv.dataset.index = i;
        document.getElementById("books").appendChild(cardDiv);
    });

    document.getElementById("add-book").addEventListener('click', toggleForm, false);
}