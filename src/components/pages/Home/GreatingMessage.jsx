import { useSessionUser } from '../../../hooks/useApiCall';
import styles from '../../../styles/pages/Home/GreatingMessage.module.scss';

const GreatingMessage = ({ userId }) => {
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useSessionUser(userId);

  if (userLoading) {
    return <div>Loading...</div>;
  }
  if (userError) {
    return <div>Error: {userError}</div>;
  }

  return (
    <div className={styles.wrapperText}>
      <h1 className={styles.title}>
        Bonjour <span>{userData.data.userInfos.firstName}</span>
      </h1>
      <p className={styles.description}>
        Félicitation ! Vous avez explosé vos objectifs hier{' '}
        <span role="img" aria-label="clapping hands">
          👏
        </span>
      </p>
    </div>
  );
};

export default GreatingMessage;
