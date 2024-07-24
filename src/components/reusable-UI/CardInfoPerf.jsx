import styles from '../../styles/components/reusable-UI/CardInfoPerf.module.scss';
import caloriesLogo from '/images/svg/caloriesLogo.svg';

const CardInfoPerf = () => {
  return (
    <div className={styles.card}>
      <img src={caloriesLogo} alt="placeholder" aria-hidden={true} />
      <div className={styles.cardContent}>
        <p className={styles.stat}>Titre</p>
        <p className={styles.description}>Contenu</p>
      </div>
    </div>
  );
};
export default CardInfoPerf;
