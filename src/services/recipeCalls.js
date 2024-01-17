import axiosClient from "../utils/configAxios";

const recipeCalls = {
  getRecipeByUserIdDB: async (id) => {
    const response = await axiosClient.get(`/recipe/user/${id}`);
    return response;
  },

  getAllRecipeDB: async () => {
    const response = await axiosClient.get(`/recipe`);
    return response;
  },

  addRecipeDB: async (data) => {
    const response = await axiosClient.post("/recipe",data);
    return response;
  },

  getRecipeByIdDB: async (id) => {
    const response = await axiosClient.get(`/recipe/${id}`)
    return response
  },

  editRecipeDB: async (id, data) => {
    const response = await axiosClient.put(`/recipe/${id}`, data)
    return response
  },

  deleteRecipeDB: async (id) => {
    const response = await axiosClient.delete(`/recipe/${id}`)
    return response
  }
};

export default recipeCalls;
