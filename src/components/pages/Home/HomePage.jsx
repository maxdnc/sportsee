import { useEffect, useState } from 'react';
import AverageSessionLineChart from '../../reusable-UI/Chart/AverageSessionLineChart';
import DailyActivityChart from '../../reusable-UI/Chart/DailyActivityChart';
import PerformanceRadarChart from '../../reusable-UI/Chart/PerfomanceRadarChart';
import ScoreRadarChart from '../../reusable-UI/Chart/ScoreRadarChart';
import NutritionDashboard from '../../reusable-UI/NutritionDashboard';
import GreatingMessage from './GreatingMessage';
import {
  sessionUser,
  userActivity,
  averageSession,
  performanceSession,
} from '../../../services/api';

const HomePage = () => {
  const userId = 18;
  const [data, setData] = useState({
    user: null,
    activity: null,
    averageSessions: null,
    performance: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const user = await sessionUser(userId);
        const activity = await userActivity(userId);
        const averageSessions = await averageSession(userId);
        const performance = await performanceSession(userId);

        setData({
          user: user.data,
          activity: activity.data.sessions,
          averageSessions: averageSessions.data.sessions,
          performance: performance.data,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <GreatingMessage user={data.user} />
      <DailyActivityChart sessions={data.activity} />
      <AverageSessionLineChart sessions={data.averageSessions} />
      <PerformanceRadarChart performanceData={data.performance} />
      <ScoreRadarChart score={data.user.score || data.user.todayScore || 0} />
      <NutritionDashboard keyData={data.user.keyData} />
    </>
  );
};

export default HomePage;
