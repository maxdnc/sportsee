import { NavLink } from 'react-router-dom';
import styles from '../../../styles/components/Layout/Header/NavLinks.module.scss';
import UserToggle from '../../pages/Home/UserToggle.jsx';

const NavLinks = () => {
  const getNavLinkClassName = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <nav className={styles.navLinks}>
      <NavLink to="/" className={getNavLinkClassName}>
        Accueil
      </NavLink>
      <NavLink to="/about" className={getNavLinkClassName}>
        Profil
      </NavLink>
      <NavLink to="/" className={getNavLinkClassName}>
        Réglage
      </NavLink>
      <NavLink to="/about" className={getNavLinkClassName}>
        Communauté
      </NavLink>
      <UserToggle />
    </nav>
  );
};
export default NavLinks;
