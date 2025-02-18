const sair = document.querySelector(".closs");
const abrir = document.querySelector(".abre");

if (abrir) {
  abrir.addEventListener("mouseup", aparece);
}

if (sair) {
  sair.addEventListener("click", () => {
    const esconder = document.querySelector(".formulario");
    if (esconder) {
      esconder.classList.add("hhdd");
    }
  });
}

function aparece() {
  console.log("clinc");
  const esconder = document.querySelector(".formulario");
  if (esconder) {
    esconder.classList.toggle("hhdd");
  }
}

function clicou() {
  console.log("clicou");
  const esconder = document.querySelector(".formulario");
  if (esconder) {
    esconder.classList.toggle("hhdd");
  }
}
