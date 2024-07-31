import AverageSessionLineChart from '../../reusable-UI/Chart/AverageSessionLineChart';
import DailyActivityChart from '../../reusable-UI/Chart/DailyActivityChart';
import PerformanceRadarChart from '../../reusable-UI/Chart/PerfomanceRadarChart';
import ScoreRadarChart from '../../reusable-UI/Chart/ScoreRadarChart';
import NutritionDashboard from '../../reusable-UI/NutritionDashboard';
import GreetingMessage from './GreatingMessage.jsx';
import styles from '../../../styles/pages/Home/HomePage.module.scss';
import {
  useSessionUser,
  useUserActivity,
  useAverageSession,
  usePerformanceSession,
} from '../../../hooks/useApiCall';

const HomePage = () => {
  const userId = 12;
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useSessionUser(userId);
  const {
    data: activityData,
    loading: activityLoading,
    error: activityError,
  } = useUserActivity(userId);
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

  if (
    userLoading ||
    activityLoading ||
    averageSessionsLoading ||
    performanceLoading
  ) {
    return <div>Loading...</div>;
  }

  if (userError || activityError || averageSessionsError || performanceError) {
    return (
      <div>
        Error:{' '}
        {userError || activityError || averageSessionsError || performanceError}
      </div>
    );
  }

  if (!userData || !activityData || !averageSessionsData || !performanceData) {
    return null;
  }

  return (
    <>
      <GreetingMessage user={userData.data} />
      <div className={styles.homePage}>
        <DailyActivityChart sessions={activityData.data.sessions} />
        <NutritionDashboard keyData={userData.data.keyData} />
        <div className={styles.charts}>
          <AverageSessionLineChart
            sessions={averageSessionsData.data.sessions}
          />
          <PerformanceRadarChart performanceData={performanceData.data} />
          <ScoreRadarChart
            score={userData.data.score || userData.data.todayScore || 0}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
