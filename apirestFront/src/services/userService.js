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

export const insertUser = async (user) => {
  try {
    const { role_id } = user;
    const role = parseInt(role_id);
    const newUser = { ...user, role_id: role };
    const url = "http://127.0.0.1:8000/api/user/store";
    const response = await axios.post(url, newUser, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    if (error.response.data.errors) {
      throw error.response.data.errors;
    }
  }
};
