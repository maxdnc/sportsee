import CardInfoPerf from '../../reusable-UI/CardInfoPerf';
import DailyActivityChart from '../../reusable-UI/Chart/DailyActivityChart';
import GreatingMessage from './GreatingMessage';

const HomePage = () => {
  let userId = 12;
  return (
    <>
      <GreatingMessage id={userId} />
      <CardInfoPerf />
      <DailyActivityChart id={userId} />
    </>
  );
};
export default HomePage;
