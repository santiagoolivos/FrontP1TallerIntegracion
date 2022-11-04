import axios from 'axios';
import { API_URL } from './apiURL';

export const getStocks = async () => {
  const response = await axios.get(`https://101f-190-215-234-155.sa.ngrok.io/stocks`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response
}