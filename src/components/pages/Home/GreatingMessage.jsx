import styles from '../../../styles/pages/Home/GreatingMessage.module.scss';

const GreatingMessage = ({ user }) => {
  if (!user) return null;

  return (
    <div className={styles.wrapperText}>
      <h1 className={styles.title}>
        Bonjour <span>{user.userInfos.firstName}</span>
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
