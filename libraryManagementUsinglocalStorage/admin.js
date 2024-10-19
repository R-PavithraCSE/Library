// Check if user is logged in and has admin role
window.onload = function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== "admin") {
        // If not logged in or not an admin, redirect to login page
        window.location.href = 'login.html';
    } else {
        loadBooks(); // Load books only if the user is authenticated
    }
};

document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole'); // Clear the user role
    window.location.href = 'login.html'; // Redirect to the login page
});


document.getElementById('addBookForm').onsubmit = function(e) {
    e.preventDefault();

    let books = JSON.parse(localStorage.getItem("Books")) || [];
    
    const book = {
        id: Date.now(), // unique ID
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        quantity: document.getElementById('quantity').value
    };

    books.push(book);
    localStorage.setItem("Books", JSON.stringify(books));

    document.getElementById('addBookForm').reset();
    loadBooks(); // Reload table
};

document.getElementById('searchBtn').onclick = function() {
    const searchTerm = document.getElementById('searchBook').value.toLowerCase();
    const books = JSON.parse(localStorage.getItem("Books")) || [];
    const searchResults = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    
    displayBooks(searchResults);
};

function loadBooks() {
    const books = JSON.parse(localStorage.getItem("Books")) || [];
    displayBooks(books);
}

function displayBooks(books) {
    const booksTable = document.getElementById('booksTable');
    booksTable.innerHTML = "";

    books.forEach(book => {
        const row = `<tr>
                        <td>${book.id}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.quantity}</td>
                        <td><a href="edit-book.html?id=${book.id}">Edit</a></td>
                    </tr>`;
        booksTable.insertAdjacentHTML('beforeend', row);
    });
}
