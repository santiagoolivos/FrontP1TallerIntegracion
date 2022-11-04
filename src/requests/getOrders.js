import axios from 'axios';
import { API_URL } from './apiURL';

export const getOrders = async () => {
  const response = await axios.get(`https://101f-190-215-234-155.sa.ngrok.io/ordenes`)
    .then((response) => {
      console.log("HOLAAA")
      console.log(response)
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return response
}