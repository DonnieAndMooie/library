let myLibrary = [];
const container = document.querySelector(".container");
const newBook = document.querySelector(".new");
const formContainer = document.querySelector(".form-container");
const closeBtn = document.querySelector(".close");
const addBookBtn = document.querySelector(".submit")
const form = document.querySelector(".form")

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

addBookBtn.addEventListener("click", () =>{
    event.preventDefault()
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(newBook);
    formPopup();
    updateScreen()
})
function updateScreen(){
    while (container.firstChild){
        container.removeChild(container.lastChild)
    }
    
    for (book of myLibrary){
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");
        container.appendChild(bookCard);
        const cardTitle = document.createElement("div");
        const cardAuthor = document.createElement("div");
        const cardPages = document.createElement("div");
        const cardRead = document.createElement("div");
        const removeBtn = document.createElement("button")
        cardTitle.textContent = "TITLE: " + book.title;
        cardAuthor.textContent = "AUTHOR: " + book.author;
        cardPages.textContent = "PAGES: " + book.pages;
        cardRead.textContent = "READ: " + book.read;
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("removeBtn")
        let indexValue = myLibrary.indexOf(book)
        removeBtn.setAttribute("index", indexValue)
        removeBtn.classList.add("removeBtn")
        bookCard.appendChild(cardTitle);
        bookCard.appendChild(cardAuthor);
        bookCard.appendChild(cardPages);
        bookCard.appendChild(cardRead);
        bookCard.appendChild(removeBtn);
        }
    
    removeCards()
    
    
        
    }

    


newBook.addEventListener("click", formPopup)

closeBtn.addEventListener("click", formPopup)
    

function formPopup(){
    if (formContainer.classList.contains("hide")){
        formContainer.classList.remove("hide")
    }
    else{
        formContainer.classList.add("hide")
    }
    clearInputs()
}

function clearInputs(){
    form.reset()
}

function removeCards(){
    const removeBtns = document.querySelectorAll(".removeBtn");
    for (btn of removeBtns){
        let deleteIndex = btn.getAttribute("index")
        btn.addEventListener("click", () => {
        myLibrary.splice(deleteIndex, 1)
        updateScreen()
    })
}
}

updateScreen()