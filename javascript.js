const bookContainer = document.getElementById('container');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookPages = document.getElementById('bookPages');
const readOrNot = document.getElementById('readOrNot');
const addBtn = document.getElementById('addNewBookBtn')

const myLibrary = [
    {
        title: 'Harry Potter and the Philosopher Stone',
        author: "JK Rowling",
        pages: 300,
        read: "yes",
        readUnread: function() {
            this.read == 'yes' ? this.read = 'no' : this.read = 'yes';
            bookContainer.innerHTML = '';
            updateCard()
        }
    },
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: "JK Rowling",
        pages: 300,
        read: "yes",
        readUnread: function() {
            this.read == 'yes' ? this.read = 'no' : this.read = 'yes';
            bookContainer.innerHTML = '';
            updateCard()
        }
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: "JK Rowling",
        pages: 300,
        read: "no",
        readUnread: function() {
            this.read == 'yes' ? this.read = 'no' : this.read = 'yes';
            bookContainer.innerHTML = '';
            updateCard()
        }
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read =  read;
}

Book.prototype.readUnread = function() {
    this.read == 'yes' ? this.read = 'no' : this.read = 'yes';
    bookContainer.innerHTML = '';
    updateCard()
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    updateCard();
}

function deleteBook(book) {
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    bookContainer.innerHTML = '';
    updateCard();
}

function updateCard() {
    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.innerHTML = 
        `
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>pages:</strong> ${book.pages}</p>
        <p><strong>read:</strong> ${book.read}</p>
        `;

        const readBtn = document.createElement('button');
        readBtn.textContent = book.read == 'yes' ? 'Mark Unread' : 'Mark Read';
        readBtn.addEventListener('click',()=>{
            book.readUnread()
    });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click',()=>{
            deleteBook(book)
    })

        bookCard.appendChild(readBtn);
        bookCard.appendChild(deleteBtn);
        bookCard.classList.add('card');
        readBtn.classList.add('buttons', 'readBtn');
        deleteBtn.classList.add('buttons', 'deleteBtn');
        bookContainer.appendChild(bookCard);
    })
}

addBtn.addEventListener('click', ()=>{
    
    if(bookTitle.value == '' || bookAuthor.value == '' || bookPages.value == '' || readOrNot.value == '') {
        alert('Please fill all the information');
    } else {
        bookContainer.innerHTML = '';
        addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, readOrNot.value);
    }

})

updateCard()