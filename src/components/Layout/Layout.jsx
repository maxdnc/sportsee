import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';

const Layout = () => {
  return (
    <div className="site">
      <Header />
      <div className="layoutDashBoard">
        <SideMenu />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;
