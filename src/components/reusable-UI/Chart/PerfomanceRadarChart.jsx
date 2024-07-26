import { useEffect, useState } from 'react';
import { performanceSession } from '../../../services/api';

const PerfomanceRadarChart = ({ id }) => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await performanceSession(id);
        setSessions(result.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  console.log(sessions);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>test</div>;
};
export default PerfomanceRadarChart;
