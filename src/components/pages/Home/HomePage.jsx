import { useEffect, useState } from 'react';
import AverageSessionLineChart from '../../reusable-UI/Chart/AverageSessionLineChart';
import DailyActivityChart from '../../reusable-UI/Chart/DailyActivityChart';
import PerformanceRadarChart from '../../reusable-UI/Chart/PerfomanceRadarChart';
import ScoreRadarChart from '../../reusable-UI/Chart/ScoreRadarChart';
import NutritionDashboard from '../../reusable-UI/NutritionDashboard';
import GreetingMessage from './GreatingMessage.jsx';

import {
  sessionUser,
  userActivity,
  averageSession,
  performanceSession,
} from '../../../services/api';

const HomePage = () => {
  const userId = 12;
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
        const [user, activity, averageSessions, performance] =
          await Promise.all([
            sessionUser(userId),
            userActivity(userId),
            averageSession(userId),
            performanceSession(userId),
          ]);

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
  if (!data.user) return null;

  return (
    <>
      <GreetingMessage user={data.user} />
      <DailyActivityChart sessions={data.activity} />
      <NutritionDashboard keyData={data.user.keyData} />
      <AverageSessionLineChart sessions={data.averageSessions} />
      <PerformanceRadarChart performanceData={data.performance} />
      <ScoreRadarChart score={data.user.score || data.user.todayScore || 0} />
    </>
  );
};

export default HomePage;
