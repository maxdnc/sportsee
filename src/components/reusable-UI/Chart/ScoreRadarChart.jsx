import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from 'recharts';
import { useSessionUser } from '../../../hooks/useApiCall';
import styles from '../../../styles/components/reusable-UI/Chart/ScoreRadialChart.module.scss';
import ErrorMessage from '../ErrorMessage';

const ScoreRadialChart = ({ userId }) => {
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useSessionUser(userId);

  if (userLoading) {
    return <div>Loading...</div>;
  }

  if (userError) {
    return (
      <ErrorMessage
        message={
          userError || 'Une erreur est survenue. Veuillez réessayer plus tard.'
        }
      />
    );
  }

  if (!userData) {
    return null;
  }

  const score = userData.data.score || userData.data.todayScore || 0;
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
