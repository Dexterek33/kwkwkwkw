// qr-scanner.js

document.addEventListener("DOMContentLoaded", function() {
    const startScanButton = document.getElementById("start-scan");
    const qrReaderContainer = document.getElementById("qr-reader");
    const qrResultElement = document.getElementById("qr-result");

    startScanButton.addEventListener("click", function() {
        // Sprawdzenie, czy HTML5QrCode jest dostępny
        if (typeof Html5Qrcode === "undefined") {
            alert("Biblioteka HTML5 QR Code nie została załadowana!");
            return;
        }

        // Tworzymy instancję skanera QR
        const html5QrCode = new Html5Qrcode("qr-reader");

        // Rozpoczynamy skanowanie
        html5QrCode.start(
            { facingMode: "environment" }, // Wybór kamery (kamera tylna)
            {
                fps: 10,   // Ilość klatek na sekundę
                qrbox: 250  // Rozmiar obszaru skanowania
            },
            (qrCodeMessage) => {
                // Funkcja, która będzie wywołana po zeskanowaniu QR
                qrResultElement.innerText = "Zeskanowano kod: " + qrCodeMessage;
                html5QrCode.stop();  // Zatrzymujemy skanowanie
            },
            (errorMessage) => {
                console.log("Błąd skanowania: " + errorMessage);
            }
        ).catch((error) => {
            console.error("Błąd podczas uruchamiania skanera: " + error);
        });
    });
});