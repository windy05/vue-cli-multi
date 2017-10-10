import axios from 'axios'

let base = '/apis'

export const getArticles =()=>{
    return axios.get(`${base}/list`,{});
};
