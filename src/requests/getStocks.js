import axios from 'axios';
import { API_URL } from './apiURL';

export const getStocks = async () => {
  const response = await axios.get(`${API_URL}/stocks`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response
}