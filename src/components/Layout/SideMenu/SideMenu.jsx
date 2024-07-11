import styles from '../../../styles/components/Layout/SideMenu/SideMenu.module.scss';
import BikeIcon from '../../../../public/images/svg/BikeIcon.jsx';
import MuscleIcon from '../../../../public/images/svg/MuscleIcon.jsx';
import SwimIcon from '../../../../public/images/svg/SwimIcon.jsx';
import YogaIcon from '../../../../public/images/svg/YogaIcon.jsx';

const SideMenu = () => {
  return (
    <aside className={styles.sideMenu}>
      <div className={styles.content}>
        <div className={styles.wrapperLogos}>
          <YogaIcon />
          <SwimIcon />
          <BikeIcon />
          <MuscleIcon />
        </div>
        <div className={styles.wrapperText}>
          <p>Copiryght, SportSee 2020</p>
        </div>
      </div>
    </aside>
  );
};
export default SideMenu;
