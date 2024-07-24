import styles from '../../../styles/pages/Home/GreatingMessage.module.scss';
import { sessionUser } from '../../../services/api';
import { useEffect, useState } from 'react';

const GreatingMessage = ({ id }) => {
  const [userFirstName, setUserFirstName] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await sessionUser(id);
        setUserFirstName(result.data.userInfos.firstName);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.wrapperText}>
      <h1 className={styles.title}>
        Bonjour <span>{userFirstName}</span>
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
