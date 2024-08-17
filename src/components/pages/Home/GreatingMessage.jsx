import styles from '../../../styles/pages/Home/GreatingMessage.module.scss';
import ErrorMessage from '../../reusable-UI/ErrorMessage';
import Loader from '../../reusable-UI/Loader';

const GreatingMessage = ({ data, loading, error, customMessage }) => {
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <ErrorMessage
        message={
          error || 'Une erreur est survenue. Veuillez réessayer plus tard.'
        }
      />
    );
  }

  return (
    <div className={styles.wrapperText}>
      <h1 className={styles.title}>
        Bonjour <span>{data.userInfos.firstName}</span>
      </h1>
      <p className={styles.description}>{customMessage}</p>
    </div>
  );
};

export default GreatingMessage;
