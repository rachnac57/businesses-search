import axios from 'axios';
import {token} from './api-config';

export const fetchData = (requestObject) => {
    const {path, params} = requestObject;
    return axios.get(`https://cors-anywhere.herokuapp.com/${path}`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            "accept": "application/json",
            Origin: 'localhost',
        },
        params
    }).then((response) => {
            return response?.data;
    }).catch(() => Promise.resolve([]));
}
