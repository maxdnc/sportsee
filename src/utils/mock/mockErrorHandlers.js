import { MOCK_ERROR_MESSAGES } from '../../constants/mocks/mockErrorMessage';

export const getMockErrorMessage = (type) => {
  return MOCK_ERROR_MESSAGES[type] || MOCK_ERROR_MESSAGES.default;
};

export const handleMockDataNotFound = () => {
  throw new Error(getMockErrorMessage('notFound'));
};

export const handleInvalidMockData = () => {
  throw new Error(getMockErrorMessage('invalidData'));
};
