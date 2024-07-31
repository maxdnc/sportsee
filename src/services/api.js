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

export const apiCall = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url);
    return await handleApiResponse(response);
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};
