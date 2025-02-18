const form = document.getElementById("formulario");
const abrir = document.querySelector("#open");

abrir.addEventListener("click", function comunicar() {
  // Estilização do formulário
  form.style.background = "#fff";
  form.style.width = "80%";
  form.style.height = "auto";
  form.style.borderRadius = "18px";
  form.style.padding = "20px";

  //
  let formulario = document.createElement("form");
  const lb = document.createElement("label");
  const lb1 = document.createElement("label");
  const lb2 = document.createElement("label");
  const lb3 = document.createElement("label");
  const nome = document.createElement("input");
  const email = document.createElement("input");
  const telefone = document.createElement("input");
  const mensagem = document.createElement("textarea");
  const btn = document.createElement("input");
  const closs = document.createElement("button");

  lb.innerText = "Nome";
  lb1.innerText = "E-mail";
  lb2.innerText = "Cellular";
  lb3.innerText = "Mensagem";
  btn.innerText = "Enviar";
  closs.innerText = "X";

  nome.type = "text";
  email.type = "email";
  telefone.type = "tel";
  btn.type = "submit";

  nome.required;
  email.required;

  nome.classList.add("nome");
  email.classList.add("email");
  telefone.classList.add("telefone");
  mensagem.classList.add("mensagem");
  btn.classList.add("botao");
  closs.classList.add("exit");

  nome.placeholder = "Nome Completo";
  email.placeholder = "exemplo@gmail.com";
  telefone.placeholder = "Número de cell";
  mensagem.placeholder = "Mensagem";

  formulario.appendChild(closs);
  formulario.appendChild(lb);
  formulario.appendChild(nome);
  formulario.appendChild(lb1);
  formulario.appendChild(email);
  formulario.appendChild(lb2);
  formulario.appendChild(telefone);
  formulario.appendChild(lb3);
  formulario.appendChild(mensagem);
  formulario.appendChild(btn);
  form.appendChild(formulario);
  //
  const sair = document.querySelector(".exit");
  sair.addEventListener("click", () => {
    console.log("clicado");
    const fechar = document.querySelector(".formulario");
    fechar.removeEventListener("click");
  });
});
