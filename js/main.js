import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizaPet();

  const formulario = document.querySelector("#pet-form");
  formulario.addEventListener("submit", manipulaSubimisaoFormulario);

  const btnCancelar = document.querySelector("#botao-cancelar");
  btnCancelar.addEventListener("click", manipularCancelamento);
});

async function manipulaSubimisaoFormulario(event) {
  event.preventDefault();
  const id = document.querySelector("#pet-id").value;
  const especie = document.querySelector("#pet-especie").value.trim();
  const nome = document.querySelector("#pet-nome").value.trim();
  const raca = document.querySelector("#pet-raca").value.trim();

  try {
    if (id) {
      await api.editarPet({ id, especie, nome, raca });
    } else {
      await api.salvaPet({ especie, nome, raca });
      ui.limparFormulario();
    }
    ui.limparFormulario();
    ui.renderizaPet();
  } catch {
    alert("erro ao salvar");
  }
}
function manipularCancelamento() {
  ui.limparFormulario();
}
