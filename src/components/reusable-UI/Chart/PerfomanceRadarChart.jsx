import { useEffect, useState } from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { performanceSession } from '../../../services/api';
import styles from '../../../styles/components/reusable-UI/Chart/PerfomanceRadarChart.module.scss';

const PerfomanceRadarChart = ({ id }) => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await performanceSession(id);
        const formattedData = result.data.data.map((item) => ({
          value: item.value,
          kind: result.data.kind[item.kind],
        }));
        setSessions(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const formatPolarAngleAxis = (kind) => {
    return kind.charAt(0).toUpperCase() + kind.slice(1);
  };

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={sessions}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={formatPolarAngleAxis}
            stroke="white"
            tickLine={false}
            style={{ fontSize: '10px', fontWeight: '500' }}
          />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerfomanceRadarChart;
