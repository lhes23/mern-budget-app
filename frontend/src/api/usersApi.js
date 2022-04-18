import axios from "axios";

const base_url = "http://localhost:3001/users";

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(base_url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
