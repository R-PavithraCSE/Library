// Mock data for demonstration
const admin = { username: "admin", password: "admin123", role: "admin" };
const user = { username: "user", password: "user123", role: "user" };

// Store users in localStorage
localStorage.setItem("admin", JSON.stringify(admin));
localStorage.setItem("user", JSON.stringify(user));

document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const enteredRole = document.getElementById('role').value;

    const storedUser = JSON.parse(localStorage.getItem(enteredRole));

    if (storedUser && enteredUsername === storedUser.username && enteredPassword === storedUser.password) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userRole', enteredRole); // Optional: Store the user's role

        if (enteredRole === "admin") {
            window.location.href = "admin-home.html";
        } else {
            window.location.href = "user-home.html";
        }
    } else {
        alert("Incorrect username, password, or role!");
    }
};
