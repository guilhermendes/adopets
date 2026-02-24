const URL_BASE = "https://adopets-itwi.onrender.com";

const api = {
  async buscaPet() {
    try {
      const response = await fetch(`${URL_BASE}/pets/`);
      const pets = await response.json();
      return pets.reverse();
    } catch {
      alert("erro ao buscar api");
      throw error;
    }
  },
  async salvaPet(pet) {
    try {
      const response = await fetch(`${URL_BASE}/pets/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });
      return await response.json();
    } catch {
      alerta("erro ao buscar");
    }
  },

  async buscaPetId(id) {
    try {
      const response = await fetch(`${URL_BASE}/pets/${id}`);
      return await response.json();
    } catch {
      alert("Não foi possível buscar o pet!");
    }
  },

  async editarPet(pet) {
    try {
      const response = await fetch(`${URL_BASE}/pets/${pet.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });
      return await response.json();
    } catch {
      alert("Não foi possível editar o pet!");
    }
  },
  async excluirPet(id) {
    try {
      const response = await fetch(`${URL_BASE}/pets/${id}`, {
        method: "DELETE",
      });
      return await response.json();
    } catch {
      alert("Não foi possível excluir o pet");
    }
  },
};

export default api;
