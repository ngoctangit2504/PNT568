import React, { createContext, useState, useContext, useEffect } from 'react';
import AuthService from "../services/authService";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = () => {
    setIsLoggedIn(true);
  }

  useEffect(() => {
    const fetchUser = async () => {
      const loggedInUser = await AuthService.getCurrentUser();
      if (loggedInUser) {
        setIsLoggedIn(true);
        setUser(loggedInUser);
      }
    };
    fetchUser();
  }, []);

  const logout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
    setUser(null);
  }


  return (

<AuthContext.Provider value={{ isLoggedIn,user, login, logout }}>
{children}
</AuthContext.Provider>

  );
};

export default AuthContext;