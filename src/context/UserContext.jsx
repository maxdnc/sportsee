import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    const savedUserId = localStorage.getItem('userId');
    return savedUserId ? parseInt(savedUserId, 10) : 12;
  });

  useEffect(() => {
    localStorage.setItem('userId', userId.toString());
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
