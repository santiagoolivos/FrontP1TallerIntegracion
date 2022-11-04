import axios from 'axios';
import { API_URL } from './apiURL';

export const getOrders = async () => {
  const response = await axios.get(`${API_URL}/ordenes`)
    .then((response) =>  response.data)
    .catch((error) => {
      console.log(error);
    });
  return response
}