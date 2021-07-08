const gridContainer = document.querySelector(".grid-container");

myLibrary = []

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    createItem(book);
    console.log(myLibrary);
};

function test() {
    console.log("test");
}

function removeBookFromLibrary(book) {
    /// var index = myLibrary.findIndex(x => x.title === book.title);
    console.log("hallo");
    //console.log(index);
}

function createItems() {
    myLibrary.forEach(element => createItem(element));
};

function createItem(book) {
    let div = document.createElement("div");
    div.classList.add("grid-item");

    let topDiv = document.createElement("div");
    let deleteButton = document.createElement("div");
    deleteButton.classList.add("red-btn", "round-s");
    deleteButton.textContent = "✘";
    topDiv.classList.add("grid-item-top");
    topDiv.textContent = `${book.title}`;
    topDiv.appendChild(deleteButton);

    let bottomDiv = document.createElement("div");
    bottomDiv.classList.add("grid-item-bottom");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.textContent = `Autor: ${book.author}`;
    p2.textContent = `${book.pages} pages`;
    p3.textContent = `ToDo`;
    bottomDiv.appendChild(p1);
    bottomDiv.appendChild(p2);
    bottomDiv.appendChild(p3);

    div.appendChild(topDiv);
    div.appendChild(bottomDiv);
    gridContainer.appendChild(div);
    console.log(book);
};

createItems();