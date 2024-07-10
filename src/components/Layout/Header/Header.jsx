import styles from '../../../styles/components/Layout/Header/Header.module.scss';
import NavLinks from './NavLinks.jsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapperLogo}></div>
      <NavLinks />
    </header>
  );
};
export default Header;
