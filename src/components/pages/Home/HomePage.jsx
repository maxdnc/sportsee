import CardInfoPerf from '../../reusable-UI/CardInfoPerf';
import AverageSessionLineChart from '../../reusable-UI/Chart/AverageSessionLineChart';
import DailyActivityChart from '../../reusable-UI/Chart/DailyActivityChart';
import PerformanceRadarChart from '../../reusable-UI/Chart/PerfomanceRadarChart.jsx';

import GreatingMessage from './GreatingMessage';

const HomePage = () => {
  let userId = 18;
  return (
    <>
      <GreatingMessage id={userId} />
      <CardInfoPerf />
      <DailyActivityChart id={userId} />
      <AverageSessionLineChart id={userId} />
      <PerformanceRadarChart id={userId} />
    </>
  );
};
export default HomePage;
