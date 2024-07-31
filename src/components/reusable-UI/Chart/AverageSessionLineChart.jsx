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
import { useAverageSession } from '../../../hooks/useApiCall';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';

const AverageSessionLineChart = ({ userId }) => {
  const {
    data: averageSessionsData,
    loading: averageSessionsLoading,
    error: averageSessionsError,
  } = useAverageSession(userId);

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
    return <span className={styles.legend}>{value}</span>;
  };

  if (averageSessionsLoading) {
    return <Loader />;
  }
  if (averageSessionsError) {
    return (
      <ErrorMessage
        message={
          averageSessionsError ||
          'Une erreur est survenue. Veuillez réessayer plus tard.'
        }
      />
    );
  }

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          data={averageSessionsData.data.sessions}
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
