// Mostra o contato quando clicar
function mostrarContato() {
    const contato = document.getElementById("contato");

    if (contato.style.display === "none") {
        contato.style.display = "block";
    } else {
        contato.style.display = "none";
    }
}