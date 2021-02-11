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

function toggleForm() {
    let div = document.getElementById("add-book-form");
    div.style.display = div.style.display == "none" || div.style.display.length == 0 ? "block" : "none";
}

Object.prototype.deleteBook = function() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

window.onload = function() {
    myLibrary.forEach(book => {
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
        cardDiv.appendChild(titleDiv);
        cardDiv.appendChild(authorDiv);
        cardDiv.appendChild(deleteButton);
        cardDiv.appendChild(changeStatusButton);
        document.getElementById("books").appendChild(cardDiv);
    });
}