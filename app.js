const container = document.querySelector(".container");
const gridContainer = document.querySelector(".grid-container");
const addBtn = document.querySelector("#add-button");
const addBtn2 = document.querySelector("#add");
const modal = document.getElementById("addModal");
const closeBtn = document.getElementById("closeBtn");

let myLibrary = [];

function Book(title, author, pages) {
    this.identifier = title+author+pages;      
    this.title = title
    this.author = author
    this.pages = pages
};

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
};

function removeBookFromLibrary(x) {
    let index = myLibrary.indexOf(item => item.identifier === x);
    console.log(index)
    myLibrary.splice(index, 1);
    console.log(myLibrary);
};

addBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

addBtn2.onclick = function () {
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("pages").value;
  let tempBook = new Book(title, author, pages);
  
  addBookToLibrary(tempBook);
  createDiv(tempBook.identifier, tempBook.author, tempBook.title, tempBook.pages);

  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";

  closeModal();
};

function openModal() {
    modal.style.display = "block";
};

function closeModal() {
    modal.style.display = "none";
};

function createDiv(identifier, author, title, pages) {
    let div = document.createElement("div");
    div.classList.add("element");
    div.textContent = `${author}, ${title}, ${pages}`;

    let closeBtn = document.createElement("div");
    closeBtn.id = identifier
    closeBtn.classList.add("close");
    closeBtn.addEventListener("click", () => {
        console.log(`ID: ${closeBtn.id}`)
        removeBookFromLibrary(closeBtn.id)
        gridContainer.removeChild(div);
    });
    div.appendChild(closeBtn);

    gridContainer.appendChild(div);

};