// MENU RESPONSIVO
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const aberto = nav.classList.toggle("open");

        menuToggle.textContent = aberto ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", aberto);
        menuToggle.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );
    });

    // Fecha o menu ao clicar em um link
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
        });
    });
}

// FORMULÁRIO DE CONTATO
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

if (contactForm && feedback) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            feedback.textContent = "Preencha todos os campos.";
            return;
        }

        feedback.textContent =
            "Mensagem preenchida com sucesso! Este formulário ainda precisa ser conectado a um serviço para enviar sua mensagem.";

        contactForm.reset();
    });
}