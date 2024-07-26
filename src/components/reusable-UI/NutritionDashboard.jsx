import CardInfoPerf from './CardInfoPerf';
import caloriesIcon from '/images/svg/calories-icon.svg';
import proteinIcon from '/images/svg/protein-icon.svg';
import carbIcon from '/images/svg/carb-icon.svg';
import fatIcon from '/images/svg/fat-icon.svg';
import styles from '../../styles/components/reusable-UI/NutritionDashboard.module.scss';

const NutritionDashboard = ({ keyData }) => {
  if (!keyData) return null;

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
