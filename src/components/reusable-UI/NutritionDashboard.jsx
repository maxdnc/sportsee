import { useState, useEffect } from 'react';
import CardInfoPerf from './CardInfoPerf';
import { sessionUser } from '../../services/api.js';
import caloriesIcon from '/images/svg/calories-icon.svg';
import proteinIcon from '/images/svg/protein-icon.svg';
import carbIcon from '/images/svg/carb-icon.svg';
import fatIcon from '/images/svg/fat-icon.svg';
import styles from '../../styles/components/reusable-UI/NutritionDashboard.module.scss';

const NutritionDashboard = ({ id }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await sessionUser(id);
        setUserData(result.data);
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

  const { keyData } = userData;

  const nutritionData = [
    {
      icon: caloriesIcon,
      key: 'calorieCount',
      unit: 'kCal',
      description: 'Calories',
    },
    {
      icon: proteinIcon,
      key: 'proteinCount',
      unit: 'g',
      description: 'Proteines',
    },
    {
      icon: carbIcon,
      key: 'carbohydrateCount',
      unit: 'g',
      description: 'Glucides',
    },
    { icon: fatIcon, key: 'lipidCount', unit: 'g', description: 'Lipides' },
  ];

  return (
    <div className={styles.nutritionWrapper}>
      {nutritionData.map((item, index) => (
        <CardInfoPerf
          key={index}
          icon={item.icon}
          stat={`${keyData[item.key]}${item.unit}`}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default NutritionDashboard;
