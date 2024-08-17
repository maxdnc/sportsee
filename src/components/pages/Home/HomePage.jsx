import AverageSessionLineChart from '../../reusable-UI/Chart/AverageSessionLineChart';
import DailyActivityChart from '../../reusable-UI/Chart/DailyActivityChart';
import PerformanceRadarChart from '../../reusable-UI/Chart/PerfomanceRadarChart';
import ScoreRadarChart from '../../reusable-UI/Chart/ScoreRadarChart';
import NutritionDashboard from '../../reusable-UI/NutritionDashboard';
import GreetingMessage from './GreatingMessage.jsx';
import styles from '../../../styles/pages/Home/HomePage.module.scss';
import {
  useAverageSession,
  usePerformanceSession,
  useSessionUser,
  useUserActivity,
} from '../../../hooks/useApiCall.js';

const HomePage = () => {
  const userId = 12;
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
        customMessage="Voici votre activité quotidienne"
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
