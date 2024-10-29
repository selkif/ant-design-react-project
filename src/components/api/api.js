import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3006",
});

export const getOrder = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const createOrder = async (data) => {
  const response = await api.post("/users", data);
  return response.data;
};

export const updateOrder = async (data) => {
  const response = await api.put(`/users/${data.id}`, data);
  return response.data;
};

export const deleteOrder = async (id) => {
  await api.delete(`/users/${id}`);
};
