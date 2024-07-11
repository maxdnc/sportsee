import styles from '../../../styles/components/Layout/Header/Header.module.scss';
import SportSeeLogo from '../../reusable-UI/SportSeeLogo.jsx';
import NavLinks from './NavLinks.jsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapperLogo}>
        <SportSeeLogo />
      </div>
      <NavLinks />
    </header>
  );
};
export default Header;
