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
console.log(hobbit.info());