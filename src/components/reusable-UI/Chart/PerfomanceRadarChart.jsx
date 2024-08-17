import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import styles from '../../../styles/components/reusable-UI/Chart/PerfomanceRadarChart.module.scss';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';

const PerfomanceRadarChart = ({ data, loading, error }) => {
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <ErrorMessage
        message={
          error || 'Une erreur est survenue. Veuillez réessayer plus tard.'
        }
      />
    );
  }

  if (!data) return null;

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="70%"
          data={data.performanceData}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kindName"
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
