import { handleNetworkError, handleHttpError } from '../utils/errorHandlers';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiCall = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { error: handleHttpError(response) };
    }
    return await response.json();
  } catch (error) {
    if (error.name === 'TypeError') {
      return { error: handleNetworkError() };
    }
    return { error: error.message };
  }
};
