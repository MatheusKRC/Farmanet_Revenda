import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3004',
});

export const getData = async (endpoint) => {
  const {data} = await request.get(endpoint)
  return data
}

export const getDataByCod = async (endpoint, body) => {
  const {data} = await request.post(endpoint, body)
  return data
}

export const postData = async (endpoint, body) => {
    const { data } = await request.post(endpoint, body)
    return data;
  };

export const patchData = async (endpoint, body) => {
  const { data } = await request.patch(endpoint, body)
  return data
}

export default request