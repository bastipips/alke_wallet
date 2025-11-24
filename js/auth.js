// auth.js
$(document).ready(function () {

    // --- LOGIN ---
    $("#loginForm").on("submit", function (e) {
        e.preventDefault();

        const email = $("#email").val().trim();
        const pass = $("#password").val().trim();

        if (email === "admin@admin.com" && pass === "Python2026") {
            localStorage.setItem("logged", "yes");
            window.location = "menu.html";
        } else {
            $("#loginError").show();
        }
    });

    // --- LOGOUT ---
    $("#logoutBtn").on("click", function () {
        localStorage.removeItem("logged");
        window.location = "login.html";
    });

    // --- PROTECCIÓN DE RUTAS ---
    const isLogged = localStorage.getItem("logged");
    const isLoginPage = location.href.includes("login");

    if (!isLogged && !isLoginPage) {
        window.location = "login.html";
    }
});
