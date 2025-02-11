import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://315a-151-250-47-163.ngrok-free.app/api';

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
    console.log('Login Response:', response.data);

    if(response.data.user) {
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
