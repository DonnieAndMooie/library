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

Book.prototype.toggleRead = function(){
    if (this.read === true){
        this.read = false
    }
    else {
        this.read = true
    }
    }


Book.prototype.createCard = function (){
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    const cardTitle = document.createElement("div");
    const cardAuthor = document.createElement("div");
    const cardPages = document.createElement("div");
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button")
    cardTitle.textContent = "TITLE: " + this.title;
    cardAuthor.textContent = "AUTHOR: " + this.author;
    cardPages.textContent = "PAGES: " + this.pages;
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("removeBtn")
    readBtn.classList.add("readBtn")
    let indexValue = myLibrary.indexOf(this)
    removeBtn.setAttribute("index", indexValue)
    readBtn.setAttribute("index", indexValue)
    this.index = indexValue
    removeBtn.classList.add("removeBtn")
    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardPages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);

    if (this.read === true){
        readBtn.textContent = "Read"
        readBtn.classList.add("read")
    }
    else{
        readBtn.textContent = "Not Read"
    }


    readBtn.addEventListener("click", (e) =>{
        if (this.read === true){
            this.read = false
            readBtn.classList.remove("read")
            readBtn.textContent = "Not Read"
        }

        else{
            this.read = true
            readBtn.textContent = "Read";
            readBtn.classList.add("read");
        }
    
})
    return bookCard
}



function addBookToLibrary(book){
    myLibrary.push(book)
}

const hp = new Book("Harry Potter", "JK Rowling", 453, false);
addBookToLibrary(hp)

const hobbit = new Book("Hobbit", "Tolkein", 363, false)
addBookToLibrary(hobbit)

const test = new Book("Test", "Random Guy", 374, true)
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

    for (const book of myLibrary){
        const bookCard = book.createCard()
        container.appendChild(bookCard);
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
    for (const btn of removeBtns){
        let deleteIndex = btn.getAttribute("index")
        btn.addEventListener("click", () => {
        myLibrary.splice(deleteIndex, 1)
        updateScreen()
    })
}
}



updateScreen()