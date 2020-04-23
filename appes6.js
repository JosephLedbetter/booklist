class Book {
 constructor(title, author, isbn){
     this.title = title;
     this.author = author;
     this.isbn = isbn;
 }
}

class UI {
    abbBookToList(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
            `;
    }

    showAlert(message, className){
        const div = document.createElement('div');
        divclassName = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('.book-form');
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
        }
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove()
        }
    }

    clearFields(){

    }
}
