// Check if the user is logged in
window.onload = function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userRole = sessionStorage.getItem('userRole');


    if (!isLoggedIn || userRole !== "user") {
        // Redirect to login page if not logged in or if not a user
        window.location.href = 'login.html';
    } else {
        loadBooks(); // Load available books
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn'); // Clear session data
        localStorage.removeItem('userRole'); // Clear user role
        window.location.href = 'login.html'; // Redirect to login page
    });
};

function loadBooks() {
    const books = JSON.parse(localStorage.getItem("Books")) || [];
    const userBooksTable = document.getElementById('userBooksTable');
    userBooksTable.innerHTML = ""; // Clear the table body

    books.forEach(book => {
        const row = `<tr>
                        <td>${book.id}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.quantity}</td>
                    </tr>`;
        userBooksTable.insertAdjacentHTML('beforeend', row);
    });
}
