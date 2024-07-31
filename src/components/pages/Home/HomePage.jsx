import AverageSessionLineChart from '../../reusable-UI/Chart/AverageSessionLineChart';
import DailyActivityChart from '../../reusable-UI/Chart/DailyActivityChart';
import PerformanceRadarChart from '../../reusable-UI/Chart/PerfomanceRadarChart';
import ScoreRadarChart from '../../reusable-UI/Chart/ScoreRadarChart';
import NutritionDashboard from '../../reusable-UI/NutritionDashboard';
import GreetingMessage from './GreatingMessage.jsx';
import styles from '../../../styles/pages/Home/HomePage.module.scss';

const HomePage = () => {
  const userId = 18;

  return (
    <>
      <GreetingMessage userId={userId} />
      <div className={styles.homePage}>
        <DailyActivityChart userId={userId} />
        <NutritionDashboard userId={userId} />
        <div className={styles.charts}>
          <AverageSessionLineChart userId={userId} />
          <PerformanceRadarChart userId={userId} />
          <ScoreRadarChart userId={userId} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
