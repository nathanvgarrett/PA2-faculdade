const paragrafo = document.getElementById("paragrafo");
const botao = document.getElementById("botao-editor");

botao.addEventListener("click", function () {
  if (botao.textContent === "Editar parágrafo") {
    paragrafo.contentEditable = true;
    paragrafo.classList.add("editavel");
    paragrafo.innerHTML = "";
    paragrafo.focus();
    botao.textContent = "Salvar mudança";
  } else {
    paragrafo.contentEditable = false;
    paragrafo.classList.add("editavel");
    botao.textContent = "Editar parágrafo";
  }
});
