const bookList = document.querySelectorAll(".book");
const titleList = document.querySelectorAll("._blank");
const advertising = document.querySelector(".adv");
const bookTitle =  document.querySelector('.book:nth-child(5) h2 a');
const book2_Li = bookList[0].querySelectorAll('li');
const book5_Li = bookList[5].querySelectorAll('li');
const book6_Li = bookList[2].querySelectorAll('li');

bookList[0].before(bookList[1]);
bookList[4].after(bookList[3]);
bookList[3].after(bookList[2]);
bookList[5].after(bookList[2]);

document.body.style.backgroundImage = "url(../image/open_book.jpg)";

 bookTitle.textContent = "Книга 3. this и Прототипы Объектов";

advertising.remove();

book2_Li[3].insertAdjacentElement('afterEnd', book2_Li[6]);
book2_Li[6].insertAdjacentElement('afterEnd', book2_Li[8]);
book2_Li[9].insertAdjacentElement('afterEnd', book2_Li[2]);

book5_Li[1].insertAdjacentElement('afterEnd', book5_Li[9]);
book5_Li[4].insertAdjacentElement('afterEnd', book5_Li[2]);
book5_Li[7].insertAdjacentElement('afterEnd', book5_Li[5]);

book6_Li[9].insertAdjacentHTML("beforeBegin", "<li>Глава 8: За пределами ES6</li>");

console.log(bookList);