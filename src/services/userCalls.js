import axiosClient from "../utils/configAxios";

const userCalls = {
  getUserDB: async (id) => {
    const response = await axiosClient.get(`/user/${id}`);
    return response;
  },
  registerDB: async (data) => {
    const response = await axiosClient.post("/register", data);
    return response;
  },
  loginDB: async (data) => {
    const response = await axiosClient.post("/login", data);
    return response;
  },

  editUserDB: async (id, data) => {
    const response = await axiosClient.put(`/user/${id}`, data)
    return response;
  }
};

export default userCalls;
