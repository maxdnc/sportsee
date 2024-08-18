import { useContext, useEffect } from 'react';
import styles from '../../../styles/components/Layout/Header/UserToggle.module.scss';
import { UserContext } from '../../../context/UserContext.jsx';

const UserToggle = () => {
  const { userId, setUserId } = useContext(UserContext);

  const toggleUser = () => {
    setUserId(userId === 12 ? 18 : 12);
  };

  useEffect(() => {
    localStorage.setItem('userId', userId.toString());
  }, [userId]);

  return (
    <div className={styles['toggle-container']}>
      <span
        className={`${styles['user-label']} ${userId === 12 ? styles['active'] : ''}`}
      >
        User 12
      </span>
      <label className={styles['switch']}>
        <input type="checkbox" checked={userId === 18} onChange={toggleUser} />
        <span className={`${styles['slider']} ${styles['round']}`}></span>
      </label>
      <span
        className={`${styles['user-label']} ${userId === 18 ? styles['active'] : ''}`}
      >
        User 18
      </span>
    </div>
  );
};

export default UserToggle;
