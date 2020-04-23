class Book {
 constructor(title, author, isbn){
     this.title = title;
     this.author = author;
     this.isbn = isbn;
 }
}

class UI {
    addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
            `;

            list.appendChild(row);
    }

    showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('.book-form');
    
        container.insertBefore(div, form);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// local storage
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
         books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks(){

    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    
    static removeBook(){

    }
}


document.querySelector('.book-form').addEventListener('submit', function(e){
    const  title = document.querySelector('#title').value,
            author = document.querySelector('#author').value,
            isbn = document.querySelector('#isbn').value;
    
    const book = new Book(title, author, isbn);
    const ui = new UI();
    
    // validate
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert(`Please fill in all fields`, 'error')
    } else {
    ui.addBookToList(book);

    // local storage save
        Store.addBook(book);

    ui.showAlert('Book added!', 'success');
    ui.clearFields();
    }
    
        e.preventDefault()
    });
    
    document.getElementById('book-list').addEventListener
    ('click', function(e){
        const ui = new UI()
        ui.deleteBook(e.target); 
        ui.showAlert('Book removed', 'success');
    
        e.preventDefault()
    });

    