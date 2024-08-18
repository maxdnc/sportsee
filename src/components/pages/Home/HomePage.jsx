import AverageSessionLineChart from '../../reusable-UI/Chart/AverageSessionLineChart';
import DailyActivityChart from '../../reusable-UI/Chart/DailyActivityChart';
import PerformanceRadarChart from '../../reusable-UI/Chart/PerfomanceRadarChart';
import ScoreRadarChart from '../../reusable-UI/Chart/ScoreRadarChart';
import NutritionDashboard from '../../reusable-UI/NutritionDashboard';
import GreetingMessage from './GreatingMessage.jsx';
import styles from '../../../styles/pages/Home/HomePage.module.scss';

import { generateCustomMessage } from '../../../utils/generateCustomMessage.js';
import { MOCK_USER_INFO } from '../../../constants/mocks/mockUserInfo';
import { MOCK_USER_ACTIVITY } from '../../../constants/mocks/mockUserActivity';
import { MOCK_USER_AVERAGE_SESSION } from '../../../constants/mocks/mockUserAverageSession';
import { MOCK_USER_PERFORMANCE } from '../../../constants/mocks/mockUserPerformance';

const HomePage = () => {
  return (
    <>
      <GreetingMessage
        data={MOCK_USER_INFO}
        customMessage={generateCustomMessage(MOCK_USER_INFO)}
      />

      <div className={styles.homePage}>
        <DailyActivityChart data={MOCK_USER_ACTIVITY} />
        <NutritionDashboard data={MOCK_USER_INFO} />

        <div className={styles.charts}>
          <AverageSessionLineChart data={MOCK_USER_AVERAGE_SESSION} />
          <PerformanceRadarChart data={MOCK_USER_PERFORMANCE} />
          <ScoreRadarChart data={MOCK_USER_INFO} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
