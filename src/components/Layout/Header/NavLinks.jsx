import { NavLink } from 'react-router-dom';
import styles from '../../../styles/components/Layout/Header/NavLinks.module.scss';

const NavLinks = () => {
  const getNavLinkClassName = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <nav className={styles.navLinks}>
      <NavLink to="/" className={getNavLinkClassName}>
        Accueil
      </NavLink>
      <NavLink to="/about" className={getNavLinkClassName}>
        A propos
      </NavLink>
    </nav>
  );
};
export default NavLinks;
