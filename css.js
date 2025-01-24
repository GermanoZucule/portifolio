const botao = document.getElementById("bt3");
const info = document.getElementById("info");

// Informação sobre os projectos
botao.addEventListener("mouseenter", () => {
  info.style.visibility = "visible";
});

botao.addEventListener("mouseout", () => {
  info.style.visibility = "hidden";
});
