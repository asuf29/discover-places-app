import axios from 'axios';

const API_URL = 'https://9eff-151-250-47-163.ngrok-free.app/api';

export const registerUser = async (userData: {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {user: userData});
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (loginData: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/login`,  loginData );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
