import axiosInstance from "./axiosConfig";


export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data;
};


export const loginUser = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  return response.data;
};


export const getUserProfile = async () => {
  const response = await axiosInstance.get("/users/me"); 
  return response.data;
};
