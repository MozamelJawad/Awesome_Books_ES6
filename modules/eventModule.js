import {
  bookTitle, bookAuthor, button, newBooks, navList, sections,
} from './variable.js';

import Book from './BookModule.js';

const shelf = new Book();

shelf.saveStorage();

const showFromStorage = () => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const title = bookTitle.value;
    const author = bookAuthor.value;

    if (!title || !author) return;
    const book = new Book(title, author);

    book.loadIntoStorage();
    book.saveStorage();
  });
};

const AddNewBook = () => {
  newBooks.addEventListener('click', (e) => {
    const remBtnId = e.target.getAttribute('id');
    shelf.removeBook(remBtnId);
  });
};

const showOff = () => {
  navList.addEventListener('click', (e) => {
    const { main } = e.target.dataset;
    sections.forEach((link) => link.classList.remove('display'));
    document.querySelector(`.main${main}`).classList.add('display');
  });
};

export {
  showOff, AddNewBook, showFromStorage,
};