
// Login Page
function goToRegister() {
    window.location.href = "Register.html";
}

    // LOGIN FORM
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            if (email && password) {
                alert("Login Successful!");
                window.location.href = "Exam.html";
            }
        });
    }

// Register Page

const registerForm = document.getElementById("registerForm");

if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const fname = document.getElementById("registerfName").value;
            const lname = document.getElementById("registerlName").value;
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;

            if (fname && lname && email && password) {
                alert("Account Created Successfully!");
                window.location.href = "Login.html";
            }
        });
}

// Exams Page

// Logout function
function logout() {
    window.location.href = "Login.html";
}

// EXAM FORM
    const examForm = document.getElementById("examForm");
    if (examForm) {
        examForm.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("Exam Registered Successfully!");
        });
    }