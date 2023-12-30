
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.describe = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages`);
  }
}

let book = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
console.log(`Title: ${book.title} Author: ${book.author} Pages: ${book.pages}`);
book.describe();
console.log(book);