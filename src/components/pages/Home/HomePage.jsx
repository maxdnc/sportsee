import AverageSessionLineChart from '../../reusable-UI/Chart/AverageSessionLineChart';
import DailyActivityChart from '../../reusable-UI/Chart/DailyActivityChart';
import PerformanceRadarChart from '../../reusable-UI/Chart/PerfomanceRadarChart.jsx';
import ScoreRadarChart from '../../reusable-UI/Chart/ScoreRadarChart.jsx';
import NutritionDashboard from '../../reusable-UI/NutritionDashboard';

import GreatingMessage from './GreatingMessage';

const HomePage = () => {
  const userId = 18;
  return (
    <>
      <GreatingMessage id={userId} />
      <DailyActivityChart id={userId} />
      <AverageSessionLineChart id={userId} />
      <PerformanceRadarChart id={userId} />
      <ScoreRadarChart id={userId} />
      <NutritionDashboard id={userId} />
    </>
  );
};
export default HomePage;
