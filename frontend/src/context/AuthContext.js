import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false)
  }


  return (

<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
{children}
</AuthContext.Provider>

  );
};

export default AuthContext;