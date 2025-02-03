// Menu hamburguer
const menu = document.querySelector("#menu");
const hbr = document.querySelector(".hamburguer");

menu.addEventListener("click", () => {
  hbr.classList.toggle("hidden");
});

// onload
window.addEventListener(
  "load",
  window.scrollTo({
    top: 0,
  })
);

// Eventos de escrolagem
window.addEventListener("scroll", () => {
  const header = window.document.querySelector(".nome");
  header.classList.toggle("rolagem", scrollY > 250);
  const head = window.document.querySelector(".cabeca");
  head.classList.toggle("roll", scrollY > 100);
  hbr.classList.toggle("hidden", scrollY > 0);
});

// Evento de escrolagem apos o click
const h1 = document.querySelector("#click");
h1.onclick = clicou;

function clicou() {
  window.scrollTo({
    top: 0,
  });
}

// REdirecionamentos

const gotolinkedin = document.querySelector("#bt1");
const gotogithub = document.querySelector("#bt2");

gotolinkedin.onclick = () => {
  window.location.href = "https://www.linkedin.com/in/germanozucule/ ";
};

gotogithub.onclick = () => {
  window.location.href = "https://github.com/GermanoZucule ";
};
