let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};

// Ativa darkmode se estiver salvo
if (darkmode === "active") enableDarkmode();

// Clique no botão = alterna tema + animação
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();

    // Animação de clique
    themeSwitch.classList.add("clicked");
    setTimeout(() => {
        themeSwitch.classList.remove("clicked");
    }, 400); // igual ao tempo da animação
});