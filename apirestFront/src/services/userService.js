import axios from "axios";

export const getAllUsers = async () => {
  try {
    const url = "http://127.0.0.1:8000/api/user/index";
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const findUserById = async (id) => {
  try {
    const url = `http://127.0.0.1:8000/api/user/show/${id}`;
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    console.log('error desde servicio');
    throw error;
  }
};
