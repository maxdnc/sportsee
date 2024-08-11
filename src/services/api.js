import { BASE_URL } from '../constants/urlApi';
import { handleNetworkError, handleHttpError } from '../utils/errorHandlers';

export const apiCall = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      handleHttpError(response);
    }
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    if (error.name === 'TypeError') {
      handleNetworkError();
    }
    throw error;
  }
};
