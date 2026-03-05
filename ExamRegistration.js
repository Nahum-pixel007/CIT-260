
// ========= Page Turner ================

function goToRegister() {
    document.getElementById("page-login").classList.remove("active");
    document.getElementById("page-register").classList.add("active");

    localStorage.setItem("currentPage", "register");
}

function goToLogin() {
    document.getElementById("page-register").classList.remove("active");
    document.getElementById("page-exam").classList.remove("active");
    document.getElementById("page-login").classList.add("active");

    localStorage.setItem("currentPage", "login")
}

function goToExam(){
    document.getElementById("page-login").classList.remove("active");
    document.getElementById("page-exam").classList.add("active");

    localStorage.setItem("currentPage", "exam");
}

window.onload = function() {
    const savedPage = this.localStorage.getItem("currentPage");

    if(savedPage == "register") {
        goToRegister();
    } 
    else if(savedPage == "exam") {
        goToExam();
    }
    else {
        goToLogin();
    }
}

// ========= Login Page ================

 
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email && password) {
            alert("Login Successful!");
            goToExam();
        }
    });
}


