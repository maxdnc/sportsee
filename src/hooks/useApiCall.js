import { useState, useEffect } from 'react';
import { apiCall } from '../services/api';
import { standardizeActivityData } from '../utils/dataStandardization/activityDataStandardization';
import { standardizeUserData } from '../utils/dataStandardization/userDataStandardization';
import { standardizeAverageSessions } from '../utils/dataStandardization/averageSessionsDataStandardization';
import { standardizePerformanceData } from '../utils/dataStandardization/performanceDataStandardization';
import { MOCK_USER_ACTIVITY } from '../constants/mocks/mockUserActivity';
import { MOCK_USER_AVERAGE_SESSION } from '../constants/mocks/mockUserAverageSession';
import { MOCK_USER_PERFORMANCE } from '../constants/mocks/mockUserPerformance';
import { MOCK_USER_INFO } from '../constants/mocks/mockUserInfo';
import { handleMockDataNotFound } from '../utils/mock/mockErrorHandlers';

export const useApiCall = (endpoint, standardizeFunction, mockData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true';
      const userId = parseInt(endpoint.split('/')[2]);

      if (useMockData) {
        const mockResult = mockData.find((item) => item.userId === userId);
        if (mockResult) {
          setData(mockResult);
        } else {
          try {
            handleMockDataNotFound();
          } catch (mockError) {
            setError(mockError.message);
          }
        }
        setLoading(false);
      } else {
        try {
          const result = await apiCall(endpoint);
          const apiData = standardizeFunction
            ? standardizeFunction(result)
            : result;
          setData(apiData);
        } catch (err) {
          setError(err.message || 'An error occurred while fetching the data.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [endpoint, standardizeFunction, mockData]);

  return { data, loading, error };
};

export const useSessionUser = (id) =>
  useApiCall(`/user/${id}`, standardizeUserData, MOCK_USER_INFO);

export const useUserActivity = (id) =>
  useApiCall(
    `/user/${id}/activity`,
    standardizeActivityData,
    MOCK_USER_ACTIVITY
  );

export const useAverageSession = (id) =>
  useApiCall(
    `/user/${id}/average-sessions`,
    standardizeAverageSessions,
    MOCK_USER_AVERAGE_SESSION
  );

export const usePerformanceSession = (id) =>
  useApiCall(
    `/user/${id}/performance`,
    standardizePerformanceData,
    MOCK_USER_PERFORMANCE
  );
