// Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book){
const list = document.getElementById('book-list');
// creating tr element
const row = document.createElement('tr');
// inserting cols
row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X</a></td>
`;
list.appendChild(row);
}

// show alert
UI.prototype.showAlert = function(message, className){
    // Create div
    const div = document.createElement('div');
    // add class
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // insert into dom --> get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('.book-form');
    // insert alert before the form inputs
    container.insertBefore(div, form);
    // timeout 3 seconds 
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

// Clear fields
UI.prototype.clearFields = function(){
   document.querySelector('#title').value = '';
   document.querySelector('#author').value = '';
   document.querySelector('#isbn').value = '';
}

// Event listeners
document.querySelector('.book-form').addEventListener('submit', function(e){
const  title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

// Instantiating a new book
const book = new Book(title, author, isbn);

// instantiating a new ui object
const ui = new UI();

// validate
if(title === '' || author === '' || isbn === ''){
    // show error window above form
    ui.showAlert(`Please fill in all fields`, 'error')
} else {
// adding a book to the list
ui.addBookToList(book)

// Clearing fields
ui.clearFields();
}

    e.preventDefault()
});


