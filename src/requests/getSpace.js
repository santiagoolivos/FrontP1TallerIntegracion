import axios from 'axios';
import { API_URL } from './apiURL';

export const getSpace = async () => {
  const response = await axios.get(`${API_URL}/stores`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response
}