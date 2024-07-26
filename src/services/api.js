export const sessionUser = async (id) => {
  let data;
  const url = `http://localhost:3000/user/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data = await response.json();
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
  return data;
};

export const userActivity = async (id) => {
  let data;
  const url = `http://localhost:3000/user/${id}/activity`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data = await response.json();
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
  return data;
};

export const averageSession = async (id) => {
  let data;
  const url = `http://localhost:3000/user/${id}/average-sessions`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data = await response.json();
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
  return data;
};

export const performanceSession = async (id) => {
  let data;
  const url = `http://localhost:3000/user/${id}/performance`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data = await response.json();
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
  return data;
};
