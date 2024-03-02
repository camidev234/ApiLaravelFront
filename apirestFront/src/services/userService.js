import axios from 'axios'

export const getAllUsers = async () => {
    try {
        const url = 'http://127.0.0.1:8000/api/user/index';
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}