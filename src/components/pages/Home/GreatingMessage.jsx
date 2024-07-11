import styles from '../../../styles/pages/Home/GreatingMessage.module.scss';
const GreatingMessage = () => {
  return (
    <div className={styles.wrapperText}>
      <h1 className={styles.title}>
        Bonjour <span>Thomas</span>
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
