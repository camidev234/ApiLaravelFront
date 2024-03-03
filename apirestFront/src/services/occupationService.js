import axios from "axios";

export const getAllOccupations = async () => {
    try {
        const url = "http://127.0.0.1:8000/api/occupation/index";
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error);
    }
}