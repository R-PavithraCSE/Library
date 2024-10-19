Library Management System
This project is a simple Library Management System built using HTML, CSS, and JavaScript with localStorage for storing and retrieving data. It features separate user roles for admin and user, allowing the admin to manage books and the user to view available books. The project has a clean and attractive user interface for easy navigation and functionality.

Features
Admin Functions:
Add Books: Admin can add new books to the library by entering the book title, author name, and quantity.
Search Books: Admin can search for books based on the title and edit the book details.
Edit Books: Admin can update the book information including title, author, and quantity.
View All Books: Admin can view the list of all available books in a well-structured table.
User Functions:
View Available Books: Users can see all the books available in the library, including book ID, title, author, and quantity.
Logout: Both admin and user can securely log out of the system.
Pages
1. Login Page:
Allows users to log in as admin or user.
Validates credentials from localStorage.
2. Admin Home Page:
Admin can manage the library by adding, searching, and editing books.
Shows a list of all the books in the system.
3. User Home Page:
Users can browse all the available books in the library.
Provides an option for users to log out.
4. Edit Book Page:
Admins can update the details of any book in the library.
Technologies Used
HTML: For structuring the web pages.
CSS: For styling the pages to create a visually appealing user interface.
JavaScript: For handling the client-side logic, including form submissions, search functionality, and book management.
localStorage: For storing the data of users, books, and login sessions.
How to Run the Project
Clone the repository or download the project files.
Open the project directory.
Open any of the HTML files (login.html, admin-home.html, user-home.html) in your web browser to access the system.
Use the default login credentials for testing:
Admin: username: admin, password: admin123
User: username: user, password: user123
Future Enhancements
Integrating a backend database (e.g., MySQL) for persistent storage.
Adding a book borrowing/return system for users.
Improving the search functionality to include filtering by author or other criteria.
