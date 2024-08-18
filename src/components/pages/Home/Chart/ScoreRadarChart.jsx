import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from 'recharts';
import styles from '../../../../styles/pages/Home/Chart/ScoreRadialChart.module.scss';
import ErrorMessage from '../../../reusable-UI/ErrorMessage';
import Loader from '../../../reusable-UI/Loader';

const ScoreRadialChart = ({ data, loading, error }) => {
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

  if (!data) {
    return null;
  }

  return (
    <div className={styles.chart}>
      <span className={styles.title}>Score</span>
      <div className={styles.content}>
        <span className={styles.scorePercentage}>
          {data.dataScore[0].scorePercentage}%
        </span>
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
          data={data.dataScore}
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
            dataKey="scorePercentage"
            cornerRadius={10}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreRadialChart;
