import { bookList } from "./books.js";

const filterCondtitionalElement = document.getElementById("filterConditional");
filterCondtitionalElement.textContent = "Enter Filter";

const filterInputElement = document.getElementById("filterInput");
filterInputElement.addEventListener("input", (event) => {
  const filterText = event.target.value.toLowerCase();
  if (filterText.length === 0) {
    filterCondtitionalElement.textContent = "Enter Filter";
    drawBooks(bookList);
  } else {
    filterCondtitionalElement.textContent = "";
    const filteredBooks = bookList.filter(
      (book) =>
        book.title.toLowerCase().includes(filterText) ||
        book.author.toLowerCase().includes(filterText) ||
        book.summary.toLowerCase().includes(filterText)
    );
    drawBooks(filteredBooks);
  }
});

const drawBooks = (books) => {
  const selectedBookTitle = document.getElementById("selectedBookTitle");
  const tableBody = document.getElementById("myTableBody");
  tableBody.replaceChildren();
  books.forEach((element) => {
    const row = document.createElement("tr");

    row.addEventListener("click", () => {
      selectedBookTitle.textContent = `${element.title} by ${element.author}`;
    });

    const title = document.createElement("td");
    title.textContent = element.title;
    row.appendChild(title);
    const author = document.createElement("td");
    author.textContent = element.author;
    row.appendChild(author);
    const summary = document.createElement("td");
    summary.textContent = element.summary;
    row.appendChild(summary);

    tableBody.appendChild(row);
  });
  // generate a table row for each book in the books parameter
  // set the table row to have data cells for the title, author, and summary
  // append the new row to the end of the table body
  // hint: document.getElementById("myTableBody")
};

drawBooks(bookList);
