import axios from "axios";

export const getAllUsers = async () => {
  const { data } = await axios.get("/api/users");
  return data;
};

export const getOneUser = async (id) => {
  const { data } = await axios.get(`api/users/${id}`);
  return data[0];
};

export const loginUser = async ({ username, password }) => {
  const { data } = await axios.post("/api/users/login", {
    username,
    password,
  });
  return data;
};

export const registerUser = async ({ email, username, password }) => {
  await axios.post("/api/users/register", { email, username, password });
};
