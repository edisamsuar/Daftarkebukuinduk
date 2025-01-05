function confirmCredentials() {
    const correctUsername = "MDBBS"; // Ganti dengan username yang benar
    const correctPin = "359218"; // Ganti dengan PIN yang benar

    const enteredUsername = document.getElementById("username").value;
    const enteredPin = document.getElementById("pin").value;

    if (enteredUsername === correctUsername && enteredPin === correctPin) {
        window.location.href = "https://forms.gle/2rqU4h3Cr9FeMdik7"; // Ganti dengan link tujuan
        return false;
    } else {
        alert("Username atau PIN salah! Silakan coba lagi.");
        return false;
    }
}
