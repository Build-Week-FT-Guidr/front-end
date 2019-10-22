import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: `https://guidr-bw.herokuapp.com`,
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    })
}

export default axiosWithAuth;