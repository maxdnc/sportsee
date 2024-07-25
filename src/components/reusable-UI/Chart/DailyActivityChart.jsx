import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { userActivity } from '../../../services/api';
import { useState, useEffect } from 'react';
import styles from '../../../styles/components/reusable-UI/Chart/DailyActivityChart.module.scss';

const DailyActivityChart = ({ id }) => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const colors = { kg: '#282D30', cal: '#E60000' };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await userActivity(id);
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

  const xAxisTickFormat = (value) => {
    const valueDay = value.split('-');
    return Number(valueDay[2]);
  };

  return (
    <div className={styles.cardChart}>
      <div className={styles.wrapperHeader}>
        <span className={styles.title}>Activité quotidienne</span>
        <div className={styles.wrapperLegends}>
          <div className={styles.legend}>
            <span
              className={styles.dot}
              style={{ backgroundColor: colors.kg }}
            ></span>
            Poids (kg)
          </div>
          <div className={styles.legend}>
            <span
              className={styles.dot}
              style={{ backgroundColor: colors.cal }}
            ></span>
            Calories brûlées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={sessions}
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
            dataKey="day"
            tickFormatter={xAxisTickFormat}
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
            fill={colors.kg}
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill={colors.cal}
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default DailyActivityChart;
