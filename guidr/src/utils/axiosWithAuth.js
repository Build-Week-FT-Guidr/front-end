import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log(token, 'token')

    return axios.create({
        baseURL: `https://guidrinfo.herokuapp.com`,
        headers: {
            Authorization: token,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          
        }
    })
}

export default axiosWithAuth;
