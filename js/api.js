const api = {
  async buscaPet() {
    try {
      const response = await fetch("http://localhost:3000/pets");
      return await response.json();
    } catch {
      alert("erro ao buscar api");
      throw error;
    }
  },
  async salvaPet(pet) {
    try {
      const response = await fetch("https://adopets-itwi.onrender.com/pets/", {
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
      const response = await fetch(
        `https://adopets-itwi.onrender.com/pets/${id}`,
      );
      return await response.json();
    } catch {
      alert("Não foi possível buscar o pet!");
    }
  },

  async editarPet(pet) {
    try {
      const response = await fetch(
        `https://adopets-itwi.onrender.com/pets/${pet.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pet),
        },
      );
      return await response.json();
    } catch {
      alert("Não foi possível editar o pet!");
    }
  },
  async excluirPet(id) {
    try {
      const response = await fetch(
        `https://adopets-itwi.onrender.com/pets/${id}`,
        {
          method: "DELETE",
        },
      );
      return await response.json();
    } catch {
      alert("Não foi possível excluir o pet");
    }
  },
};

export default api;
