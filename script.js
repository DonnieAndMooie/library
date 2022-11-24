let myLibrary = [];
const container = document.querySelector(".container")

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

const hp = new Book("harry potter", "jk rowling", 453, "yes");
addBookToLibrary(hp)

const hobbit = new Book("hobbit", "tolkein", 363, "no")
addBookToLibrary(hobbit)

const test = new Book("test", "random guy", 374, "yes")
addBookToLibrary(test)

for (book of myLibrary){
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    container.appendChild(bookCard);
    const cardTitle = document.createElement("div");
    const cardAuthor = document.createElement("div");
    const cardPages = document.createElement("div");
    const cardRead = document.createElement("div");
    cardTitle.textContent = "TITLE: " + book.title;
    cardAuthor.textContent = "AUTHOR: " + book.author;
    cardPages.textContent = "PAGES: " + book.pages;
    cardRead.textContent = "READ: " + book.read;
    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardPages);
    bookCard.appendChild(cardRead);

}