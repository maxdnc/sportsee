import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  YAxis,
} from 'recharts';

import styles from '../../../styles/components/reusable-UI/Chart/AverageSessionLineChart.module.scss';
import { useEffect, useState } from 'react';
import { averageSession } from '../../../services/api';

const AverageSessionLineChart = ({ id }) => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await averageSession(id);
        setSessions(result.data.sessions);
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

  const weekdays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const formatXAxis = (day) => weekdays[day - 1];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  const renderColorfulLegendText = (value) => {
    return (
      <span style={{ color: '#FFFFFF', opacity: 0.5, fontSize: '15px' }}>
        {value}
      </span>
    );
  };

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          data={sessions}
          margin={{
            top: 15,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              strokeLinecap: 'square',
              stroke: 'black',
              strokeWidth: 79,
              strokeOpacity: 0.1,
            }}
          />
          <Legend
            verticalAlign="top"
            iconSize={0}
            formatter={renderColorfulLegendText}
          />
          <YAxis domain={['dataMin - 5', 'dataMax + 5']} hide={true} />
          <XAxis
            fontSize={12}
            minTickGap={2}
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="white"
            tickFormatter={formatXAxis}
            tick={{ fill: '#FFFFFF', opacity: '0.5' }}
          />

          <Line
            opacity={0.8}
            layout="vertical"
            strokeWidth={1.3}
            type="monotone"
            dataKey="sessionLength"
            name="Durée moyenne des sessions"
            stroke="white"
            dot={false}
            activeDot={{
              stroke: 'rgba(255, 255, 255, 0.3)',
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionLineChart;
