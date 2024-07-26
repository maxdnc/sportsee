import { useEffect, useState } from 'react';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { sessionUser } from '../../../services/api';
import styles from '../../../styles/components/reusable-UI/Chart/ScoreRadialChart.module.scss';

const ScoreRadialChart = ({ id }) => {
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await sessionUser(id);
        setScore(result.data.score || result.data.todayScore || 0);
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

  const scorePercentage = score * 100;
  const data = [{ value: scorePercentage }];

  return (
    <div className={styles.chart}>
      <span className={styles.title}>Score</span>
      <div className={styles.content}>
        <span className={styles.scorePercentage}>{scorePercentage}%</span>
        <p className={styles.descriptionText}>
          de votre
          <br />
          objectif
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            clockWise={false}
            dataKey="value"
            cornerRadius={10}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreRadialChart;
