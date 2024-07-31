import styles from '../../styles/components/reusable-UI/ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorMessage;
