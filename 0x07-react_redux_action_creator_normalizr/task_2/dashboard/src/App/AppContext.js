import React from 'react';

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const defaultLogOut = () => {};

const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

const AppProvider = ({ children, value }) => (
  <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
);

export { AppContext, AppProvider, defaultUser };
