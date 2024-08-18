import AverageSessionLineChart from './Chart/AverageSessionLineChart.jsx';
import DailyActivityChart from './Chart/DailyActivityChart';
import PerformanceRadarChart from './Chart/PerfomanceRadarChart';
import ScoreRadarChart from './Chart/ScoreRadarChart';
import NutritionDashboard from './NutritionDashboard';
import GreetingMessage from './GreatingMessage.jsx';
import styles from '../../../styles/pages/Home/HomePage.module.scss';

import {
  useAverageSession,
  usePerformanceSession,
  useSessionUser,
  useUserActivity,
} from '../../../hooks/useApiCall.js';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext.jsx';
import { generateCustomMessage } from '../../../utils/generateCustomMessage.js';

const HomePage = () => {
  const { userId } = useContext(UserContext);
  const {
    data: activityData,
    loading: activityLoading,
    error: activityError,
  } = useUserActivity(userId);

  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useSessionUser(userId);

  const {
    data: averageSessionsData,
    loading: averageSessionsLoading,
    error: averageSessionsError,
  } = useAverageSession(userId);

  const {
    data: performanceData,
    loading: performanceLoading,
    error: performanceError,
  } = usePerformanceSession(userId);

  return (
    <>
      <GreetingMessage
        data={userData}
        loading={userLoading}
        error={userError}
        customMessage={generateCustomMessage(userData)}
      />

      <div className={styles.homePage}>
        <DailyActivityChart
          data={activityData}
          loading={activityLoading}
          error={activityError}
        />
        <NutritionDashboard
          data={userData}
          loading={userLoading}
          error={userError}
        />

        <div className={styles.charts}>
          <AverageSessionLineChart
            data={averageSessionsData}
            loading={averageSessionsLoading}
            error={averageSessionsError}
          />
          <PerformanceRadarChart
            data={performanceData}
            loading={performanceLoading}
            error={performanceError}
          />
          <ScoreRadarChart
            data={userData}
            loading={userLoading}
            error={userError}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
