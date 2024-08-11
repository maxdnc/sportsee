import { ERROR_MESSAGES } from '../constants/errorMessages';

export const getErrorMessage = (status) => {
  return ERROR_MESSAGES[status] || ERROR_MESSAGES.default;
};

export const handleNetworkError = () => {
  throw new Error(
    'Impossible de se connecter au serveur. Veuillez vérifier votre connexion réseau et réessayer.'
  );
};

export const handleHttpError = (response) => {
  const errorMessage = getErrorMessage(response.status);
  throw new Error(errorMessage);
};
