import { useSessionUser, useUserActivity } from '../../../hooks/useApiCall';
import styles from '../../../styles/pages/Home/GreatingMessage.module.scss';
import ErrorMessage from '../../reusable-UI/ErrorMessage';
import Loader from '../../reusable-UI/Loader';

const GreatingMessage = ({ userId }) => {
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useSessionUser(userId);

  const {
    data: activityData,
    loading: activityLoading,
    error: activityError,
  } = useUserActivity(userId);

  if (userLoading || activityLoading) {
    return <Loader />;
  }
  if (userError || activityError) {
    return (
      <ErrorMessage
        message={
          userError ||
          activityError ||
          'Une erreur est survenue. Veuillez réessayer plus tard.'
        }
      />
    );
  }

  // Calculer la moyenne des calories brûlées
  const sessions = activityData.data.sessions;
  const totalCalories = sessions.reduce(
    (sum, session) => sum + session.calories,
    0
  );
  const averageCalories = totalCalories / sessions.length;

  // Déterminer le message en fonction de la moyenne des calories brûlées
  const performanceMessage =
    averageCalories > 250
      ? 'Félicitation ! Vous avez brûlé beaucoup de calories cette semaine 👏'
      : 'Continuez comme ça ! Vous êtes sur la bonne voie 🚀';

  return (
    <div className={styles.wrapperText}>
      <h1 className={styles.title}>
        Bonjour <span>{userData.data.userInfos.firstName}</span>
      </h1>
      <p className={styles.description}>{performanceMessage}</p>
    </div>
  );
};

export default GreatingMessage;
