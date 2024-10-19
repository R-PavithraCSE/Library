const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');
let books = JSON.parse(localStorage.getItem("Books")) || [];
let book = books.find(b => b.id == bookId);

if (book) {
    document.getElementById('bookId').value = book.id;
    document.getElementById('editTitle').value = book.title;
    document.getElementById('editAuthor').value = book.author;
    document.getElementById('editQuantity').value = book.quantity;
}

document.getElementById('editBookForm').onsubmit = function(e) {
    e.preventDefault();

    book.title = document.getElementById('editTitle').value;
    book.author = document.getElementById('editAuthor').value;
    book.quantity = document.getElementById('editQuantity').value;

    localStorage.setItem("Books", JSON.stringify(books));
    alert("Book details updated successfully!");
    window.location.href = "admin-home.html";
};
