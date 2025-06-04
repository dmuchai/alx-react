import React from 'react';

// Default user object
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Default logOut function
const logOut = () => {
  console.log('Logging out');
};

// Create the context
const AppContext = React.createContext({
  user: defaultUser,
  logOut: () => {},
});

// Export everything needed
export { AppContext as default, defaultUser, logOut };
