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
        read: "yes" 
    },
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: "JK Rowling",
        pages: 300,
        read: "yes"
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: "JK Rowling",
        pages: 300,
        read: "no"
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read =  read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    myLibrary.forEach((book)=>{
        const bookCard = document.createElement('div');
        bookCard.innerHTML = 
        `
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>pages: ${book.pages}</p>
        <p>read: ${book.read}</p>
        `;
        bookContainer.appendChild(bookCard);
    })
}

addBtn.addEventListener('click', ()=>{
    bookContainer.innerHTML = '';
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, readOrNot.value);
})