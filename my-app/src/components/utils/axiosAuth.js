import axios from 'axios';

export const axiosAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://medcabinet-ds-0820.herokuapp.com/labels',
        headers: {
            Authorization: token
        }
    });
};