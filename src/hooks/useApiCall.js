import { useState, useEffect } from 'react';
import { apiCall } from '../services/api';
import { standardizeActivityData } from '../utils/dataStandardization/activityDataStandardization';
import { standardizeUserData } from '../utils/dataStandardization/userDataStandardization';
import { standardizeAverageSessions } from '../utils/dataStandardization/averageSessionsDataStandardization';
import { standardizePerformanceData } from '../utils/dataStandardization/performanceDataStandardization';

export const useApiCall = (endpoint, standardizeFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiCall(endpoint);
        const standardizedData = standardizeFunction
          ? standardizeFunction(result)
          : result;
        setData(standardizedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, standardizeFunction]);

  return { data, loading, error };
};

export const useSessionUser = (id) =>
  useApiCall(`/user/${id}`, standardizeUserData);

export const useUserActivity = (id) =>
  useApiCall(`/user/${id}/activity`, standardizeActivityData);

export const useAverageSession = (id) =>
  useApiCall(`/user/${id}/average-sessions`, standardizeAverageSessions);

export const usePerformanceSession = (id) =>
  useApiCall(`/user/${id}/performance`, standardizePerformanceData);
