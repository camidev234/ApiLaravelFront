import axios from "axios";

export const getRoles = async () => {
    try {
        // const url = "http://127.0.0.1:8000/api/roles/index";
        const url = "https://raqqobo.nyc.dom.my.id/api/roles/index";
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error);
    }
};