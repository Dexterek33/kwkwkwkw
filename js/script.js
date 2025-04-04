let qrBtn = document.getElementById("qr-btn");
let errorModal = document.getElementById("errorModal");
let closeBtn = document.getElementById("close-btn");

qrBtn.addEventListener("click", function () {
    // Wyświetl modal z błędem
    errorModal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    // Przekierowanie do home.html
    window.location.href = "home.html";
});

// Zamknij modal, gdy klikniesz poza jego obszar
window.onclick = function(event) {
    if (event.target == errorModal) {
        errorModal.style.display = "none";
    }
};