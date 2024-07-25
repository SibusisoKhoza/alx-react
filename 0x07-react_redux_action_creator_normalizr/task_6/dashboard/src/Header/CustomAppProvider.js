import React from 'react';
import { AppContext } from '../App/AppContext';

const CustomAppProvider = ({ children, value }) => (
  <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
);

export default CustomAppProvider;
