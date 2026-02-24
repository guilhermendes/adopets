import api from "./api.js";

const ui = {
  async excluirPet(petId) {
    await api.excluirPet(petId);
    ui.renderizaPet();
  },

  async preencherFormulario(petId) {
    const pet = await api.buscaPetId(petId);
    document.querySelector("#pet-id").value = pet.id;
    document.querySelector("#pet-especie").value = pet.especie;
    document.querySelector("#pet-nome").value = pet.nome;
    document.querySelector("#pet-raca").value = pet.raca;
  },

  async renderizaPet() {
    const listaPet = document.querySelector("#lista-pet");
    listaPet.innerHTML = "";
    try {
      const pets = await api.buscaPet();
      if (!pets || pets.length === 0) {
        ui.carregarConteudoVazio();
      } else {
        pets.forEach(ui.adicionarPetsNaLista);
      }
    } catch {
      alert("Não é possível exibir o pet");
      throw Error;
    }
  },

  adicionarPetsNaLista(pet) {
    const listaPet = document.querySelector("#lista-pet");
    const li = document.createElement("li");
    li.setAttribute("data-id", pet.id);
    li.classList.add("li-pet");

    const petEspecie = document.createElement("div");
    petEspecie.textContent = pet.especie;
    petEspecie.classList.add("pet-especie");

    const petNome = document.createElement("div");
    petNome.textContent = pet.nome;
    petNome.classList.add("pet-nome");

    const petRaca = document.createElement("div");
    petRaca.textContent = pet.raca;
    petRaca.classList.add("pet-raca");

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    botaoEditar.addEventListener("click", () => {
      ui.preencherFormulario(pet.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const iconeEditar = document.createElement("img");
    iconeEditar.src = "assets/imagens/icone-editar.png";
    iconeEditar.alt = "Editar";
    botaoEditar.appendChild(iconeEditar);

    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.addEventListener("click", () => ui.excluirPet(pet.id));

    const iconeExclir = document.createElement("img");
    iconeExclir.src = "assets/imagens/icone-excluir.png";
    iconeExclir.alt = "Excluir";
    botaoExcluir.appendChild(iconeExclir);

    const icones = document.createElement("div");
    icones.classList.add("icones");
    icones.appendChild(botaoEditar);
    icones.appendChild(botaoExcluir);

    const iconePata = document.createElement("img");
    iconePata.src = "assets/imagens/icone-pata.png";
    iconePata.alt = "Pata";
    iconePata.classList.add("icone-pata");

    li.appendChild(iconePata);
    li.appendChild(petEspecie);
    li.appendChild(petNome);
    li.appendChild(petRaca);
    li.appendChild(icones);
    listaPet.appendChild(li);
  },
  carregarConteudoVazio() {
    const containerPet = document.querySelector("section");

    const container = document.createElement("div");
    container.classList.add("pet-conteudo");

    const iconeCaixa = document.createElement("img");
    iconeCaixa.src = "assets/imagens/icone-alerta.png";
    iconeCaixa.alt = "Caixa Vazia";

    const conteudo = document.createElement("p");
    conteudo.textContent = "Nenhum pet cadastrado";

    container.appendChild(iconeCaixa); // 👈 imagem primeiro
    container.appendChild(conteudo);
    containerPet.appendChild(container); // 👈 corrigido
  },
  limparFormulario() {
    document.querySelector("#pet-form").reset();
  },
};
export default ui;
