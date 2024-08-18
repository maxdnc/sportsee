import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import styles from '../../../../styles/pages/Home/Chart/DailyActivityChart.module.scss';
import ErrorMessage from '../../../reusable-UI/ErrorMessage';
import Loader from '../../../reusable-UI/Loader';

const DailyActivityChart = ({ data, loading, error }) => {
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

  const SimpleBarChartTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltipWrapper}>
          <div className={styles.content}>
            <p className={styles.item}>{payload[0].value}kg</p>
            <p className={styles.item}>{payload[1].value}kCal</p>
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <div className={styles.cardChart}>
      <div className={styles.wrapperHeader}>
        <span className={styles.title}>Activité quotidienne</span>
        <div className={styles.wrapperLegends}>
          <div className={styles.legend}>
            <span
              className={styles.dot}
              style={{ backgroundColor: '#282D30' }}
            ></span>
            Poids (kg)
          </div>
          <div className={styles.legend}>
            <span
              className={styles.dot}
              style={{ backgroundColor: '#E60000' }}
            ></span>
            Calories brûlées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data.sessions}
          barGap="8"
          margin={{ top: 25, left: 25, right: 25, bottom: 25 }}
        >
          <CartesianGrid
            strokeDasharray="3 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            tickLine={false}
            stroke="#9B9EAC"
            tickMargin={15}
            dataKey="dayNumber"
            scale="point"
            padding={{ left: 11.4, right: 11 }}
          />
          <YAxis
            yAxisId="kg"
            domain={['dataMin -2', 'dataMax +2']}
            allowDataOverflow={true}
            dataKey="kilogram"
            stroke="#9B9EAC"
            orientation="right"
            tickCount="4"
            axisLine={false}
            tickLine={false}
            tickMargin={40}
          />
          <YAxis yAxisId="cal" datakey="calories" hide={true} />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            radius={[7, 7, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            radius={[7, 7, 0, 0]}
            barSize={7}
          />
          <Tooltip content={<SimpleBarChartTooltip />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default DailyActivityChart;
