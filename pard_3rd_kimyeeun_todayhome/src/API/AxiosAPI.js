import axios from "axios";

export const getInfo = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/users/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const patchInfo = async (data) => {
  try {
    const response = await axios.patch(`http://localhost:3001/users/1`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
