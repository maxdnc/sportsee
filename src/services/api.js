const BASE_URL = 'http://localhost:3000';

const handleApiResponse = async (response) => {
  if (!response.ok) {
    let errorMessage;
    switch (response.status) {
      case 400:
        errorMessage =
          'La requête est incorrecte. Veuillez vérifier vos données et réessayer.';
        break;
      case 401:
        errorMessage =
          "Vous n'êtes pas autorisé à accéder à cette ressource. Veuillez vous connecter.";
        break;
      case 403:
        errorMessage =
          "Accès refusé. Vous n'avez pas les permissions nécessaires.";
        break;
      case 404:
        errorMessage =
          'La ressource demandée est introuvable. Veuillez réessayer plus tard.';
        break;
      case 405:
        errorMessage =
          "La méthode demandée n'est pas autorisée. Veuillez réessayer plus tard.";
        break;
      case 500:
        errorMessage =
          'Erreur interne du serveur. Veuillez réessayer plus tard.';
        break;
      case 502:
        errorMessage = 'Mauvaise passerelle. Veuillez réessayer plus tard.';
        break;
      case 503:
        errorMessage = 'Service indisponible. Veuillez réessayer plus tard.';
        break;
      case 504:
        errorMessage =
          'Le délai de la passerelle a expiré. Veuillez réessayer plus tard.';
        break;
      default:
        errorMessage =
          "Une erreur inattendue s'est produite. Veuillez réessayer plus tard.";
    }
    throw new Error(errorMessage);
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
