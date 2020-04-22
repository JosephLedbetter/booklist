// Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Event listeners
document.querySelector('.book-form').addEventListener('submit', function(e){
const  title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;
// Instantiating a new book
const book = new Book(title, author, isbn);
console.log(book)
    e.preventDefault()
});


