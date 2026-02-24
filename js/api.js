//const URL_BASE = "https://adopets-itwi.onrender.com";
const URL_BASE = "http://localhost:3000";

const api = {
  async buscaPet() {
    try {
      const response = await fetch(`${URL_BASE}/pets/`);
      const pets = await response.json();

      if (!response.ok) throw new Error("Erro ao buscar pet");
      return pets.reverse();
    } catch (error) {
      console.error(error);
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

      if (!response.ok) throw new Error("Erro ao salvar pet");

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async buscaPetId(id) {
    try {
      const response = await fetch(`${URL_BASE}/pets/${id}`);

      if (!response.ok) throw new Error("Erro ao buscar pet");

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
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
      if (!response.ok) throw new Error("Erro ao editar pet");

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async excluirPet(id) {
    try {
      const response = await fetch(`${URL_BASE}/pets/${id}`, {
        method: "DELETE",
      });
      return await response.json();
    } catch {
      console.error(error);
      throw error;
    }
  },
};

export default api;
