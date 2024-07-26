import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import styles from '../../../styles/components/reusable-UI/Chart/PerfomanceRadarChart.module.scss';

const PerfomanceRadarChart = ({ performanceData }) => {
  if (!performanceData) return null;

  const formatPolarAngleAxis = (kind) =>
    kind.charAt(0).toUpperCase() + kind.slice(1);

  const formattedData = performanceData.data.map((item) => ({
    value: item.value,
    kind: performanceData.kind[item.kind],
  }));

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
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
