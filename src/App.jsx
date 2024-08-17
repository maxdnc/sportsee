import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';

import HomePage from './components/pages/Home/HomePage.jsx';
import { UserProvider } from './context/UserContext.jsx';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
