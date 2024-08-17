import CardInfoPerf from './CardInfoPerf';
import styles from '../../styles/components/reusable-UI/NutritionDashboard.module.scss';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import { nutritionData } from '../../utils/dataStandardization/nutritionDataStandardization';

const NutritionDashboard = ({ data, loading, error }) => {
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <ErrorMessage
        message={
          error || 'Une erreur est survenue. Veuillez réessayer plus tard.'
        }
      />
    );
  }

  return (
    <div className={styles.nutritionWrapper}>
      {nutritionData.map((item, index) => (
        <CardInfoPerf
          key={index}
          icon={item.icon}
          stat={`${data.keyData[item.key]}${item.unit}`}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default NutritionDashboard;
