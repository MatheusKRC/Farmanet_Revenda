import axios from 'axios';

const request = axios.create({
  baseURL: 'https://farmanetrevenda-production-63b5.up.railway.app/',
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

export const deleteData = async (endpoint) => {
  const { data } = await request.delete(endpoint)
  return data
}

export default request