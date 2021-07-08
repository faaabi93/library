const gridContainer = document.querySelector(".grid-container");
const addBtn = document.querySelector(".add-btn");
const addBtnModal = document.querySelector(".modal-bottom");
const modal = document.querySelector(".modal")

// Book
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

// Library:
myLibrary = []

function addBookToLibrary(book) {
    myLibrary.push(book);
    createItem(book);
};

function removeBookFromLibrary(e) {
    var index = myLibrary.findIndex(x => x.title === e.path[1].firstChild.data);
    myLibrary.splice(index, 1);
    gridContainer.removeChild(e.path[2]);
};

function markBookAsRead(e) {
    var index = myLibrary.findIndex(x => x.title === e.path[2].children[0].firstChild.data);
    myLibrary[index].isRead ^= true;
    if(e.path[1].children[2].innerText === "Not read yet") {
        e.path[1].children[2].innerText = "Already read";
    } else {
        e.path[1].children[2].innerText = "Not read yet";
    }
};

// Modal:
addBtn.addEventListener("click", openModal);
addBtnModal.addEventListener("click", addButtonModal);

function openModal() {
    modal.style.display="block";
};

function closeModal() {
    modal.style.display="none";
    clearModal();
};

window.onclick = function(event) {
    if(event.target == modal) {
        closeModal();
        clearModal();
    }
};

function addButtonModal() {
    var author = document.getElementById("new-author").value;
    var title = document.getElementById("new-title").value;
    var pages = document.getElementById("new-pages").value;
    if (!(author && title && pages) || (pages < 1)) return;
    var isRead = document.getElementById("new-isRead").checked;
    var tempBook = new Book(title, author, pages, isRead);
    addBookWidget(tempBook);
    closeModal();
};

function clearModal() {
    document.getElementById("new-author").value = "";
    document.getElementById("new-title").value = "";
    document.getElementById("new-pages").value = "";

};

// UI
function addBookWidget(book) {
    var buch = new Book(book.title, book.author, book.pages, book.isRead);
    addBookToLibrary(buch);
};

function createItems() {
    myLibrary.forEach(element => createItem(element));
};

function createItem(book) {
    let div = document.createElement("div");
    div.classList.add("grid-item");

    let topDiv = document.createElement("div");
    topDiv.classList.add("grid-item-top");

    let deleteButton = document.createElement("div");
    deleteButton.classList.add("red-btn", "round-s", "delete-btn");
    deleteButton.textContent = "✘";
    deleteButton.addEventListener("click", removeBookFromLibrary);
    topDiv.textContent = `${book.title}`;
    topDiv.appendChild(deleteButton);

    let bottomDiv = document.createElement("div");
    bottomDiv.classList.add("grid-item-bottom");
    
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.innerHTML = `<b>Autor</b>: ${book.author}`;
    p2.innerHTML = `<b>Pages</b>: ${book.pages}`;
    if(book.isRead){
        p3.textContent = "Already read";
    } else {
        p3.textContent = "Not read yet";
    }
    let changeReadBtn = document.createElement("div");
    changeReadBtn.textContent = " ";
    changeReadBtn.classList.add("blue-btn", "round-s", "change-btn")
    changeReadBtn.addEventListener("click", markBookAsRead);

    bottomDiv.appendChild(p1);
    bottomDiv.appendChild(p2);
    bottomDiv.appendChild(p3);
    bottomDiv.appendChild(changeReadBtn)

    div.appendChild(topDiv);
    div.appendChild(bottomDiv);
    gridContainer.appendChild(div);
};