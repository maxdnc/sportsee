import styles from '../../styles/components/reusable-UI/CardInfoPerf.module.scss';

const CardInfoPerf = ({ icon, stat, description }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt={description} aria-hidden={true} />
      <div className={styles.cardContent}>
        <p className={styles.stat}>{stat}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default CardInfoPerf;
