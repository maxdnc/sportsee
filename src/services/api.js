const BASE_URL = 'http://localhost:3000';

const handleApiResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || `HTTP error! status: ${response.status}`
    );
  }
  return response.json();
};

const apiCall = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url);
    return await handleApiResponse(response);
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export const sessionUser = (id) => apiCall(`/user/${id}`);
export const userActivity = (id) => apiCall(`/user/${id}/activity`);
export const averageSession = (id) => apiCall(`/user/${id}/average-sessions`);
export const performanceSession = (id) => apiCall(`/user/${id}/performance`);
