let myLibrary = [];

const newBook = document.querySelector('.newBook');
const submit = document.querySelector('.submit');
const modal = document.querySelector('.modal');
const close = document.querySelector(".close");
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const library = document.querySelector('.library');
let vFlag;

class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
}

function validateForm() {
  vFlag = true;
  if (title.value == "") {
    alert("Title must be filled in.");
    vFlag = false;
    return false;
  }

  if (author.value == "") {
    alert("Author must be filled in.");
    vFlag = false;
    return false;
  }

  if (pages.value == "") {
    alert("Page number must be filled in.");
    vFlag = false;
    return false;
  }
}

function updateRead(e) {
  myLibrary[e.target.dataset.index].read = e.target.checked
}

function deleteBook(e) {
  myLibrary.splice(e.target.dataset.index, 1)
  updateLibrary();
}

function addBookToLibrary() {
  let titleb = title.value;
  let authorb = author.value;
  let pagesb = pages.value;
  let readb = read.checked;
  let newBook = new Book(titleb, authorb, pagesb, readb);
  myLibrary.push(newBook);
};

function updateLibrary() {
  html = '';
  myLibrary.forEach((book, index) => {
    html += `
    <div>
      <h2>${book.title}</h2>
      <p> by ${book.author}</p>
      <p>${book.pages} pages</p>
      <label>Read? <input class='book-read' type='checkbox' ${book.read ? 'checked' : ''} data-index='${index}'></label>
      <input type='button' value='Delete Book' data-index='${index}'>
    </div>`
  })
  library.innerHTML = html;
  const checkboxes = document.querySelectorAll('.book-read');
  checkboxes.forEach(box => box.addEventListener('click', updateRead))
  const deleteButtons = document.querySelectorAll('input[type="button"]');
  deleteButtons.forEach(button => button.addEventListener('click', deleteBook));
}

function openModal() {
  // modal.classList.remove('hidden')
  modal.style.display = "flex";
}

function closeModal() {
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
  modal.style.display = "none"
}

function submitBook() {
  validateForm();
  if(vFlag == false) return;
  addBookToLibrary();
  updateLibrary();
  closeModal();
}

newBook.addEventListener('click', openModal);
submit.addEventListener('click', submitBook);
close.addEventListener("click", closeModal);



window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}




// function Student() {
// }

// Student.prototype.sayName = function() {
//   console.log(this.name)
// }

// function EighthGrader(name) {
//   this.name = name
//   this.grade = 8
// }

// EighthGrader.prototype = Object.create(Student.prototype)

// const carl = new EighthGrader("carl")
// carl.sayName() // console.logs "carl"
// console.log(carl.grade) // 8