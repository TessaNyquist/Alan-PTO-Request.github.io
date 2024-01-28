import React from 'react';
import { useMsal } from 'react-msal';

const Login = () => {
  const { login } = useMsal();

  const handleLogin = () => {
    login();
  };

  return (
    <div>
      <h1>Login to Outlook</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;