import styles from '../../styles/components/reusable-UI/Loader.module.scss';
const Loader = ({ size = 50, color = '#74798c' }) => {
  return (
    <div
      className={styles.spinnerContainer}
      style={{ width: size, height: size }}
    >
      <svg
        className={styles.spinner}
        viewBox="0 0 50 50"
        style={{ width: '100%', height: '100%' }}
      >
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          style={{ stroke: color }}
        />
      </svg>
    </div>
  );
};

export default Loader;
