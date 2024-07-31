import { useState, useEffect } from 'react';
import { apiCall } from '../services/api';

export const useApiCall = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiCall(endpoint);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export const useSessionUser = (id) => useApiCall(`/user/${id}`);
export const useUserActivity = (id) => useApiCall(`/user/${id}/activity`);
export const useAverageSession = (id) =>
  useApiCall(`/user/${id}/average-sessions`);
export const usePerformanceSession = (id) =>
  useApiCall(`/user/${id}/performance`);
