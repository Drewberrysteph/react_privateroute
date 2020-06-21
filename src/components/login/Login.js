import React from "react";
import Nav from "../nav/Nav";

const Login = ({ isLogged, setLogged }) => {
  const renderLoginComp = () => {
    const handleLogin = () => {
      setLogged(true);
    };
    return (
      <>
        <h3>Please login</h3>
        <button onClick={handleLogin}>Login</button>
      </>
    );
  };

  const renderIsLoggedComp = () => {
    const handleLogout = () => {
      setLogged(false);
    };
    return (
      <>
        <h3>Welcome!</h3>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  };

  return (
    <div>
      {isLogged ? (
        <>
          <Nav />
          {renderIsLoggedComp()}
        </>
      ) : (
        renderLoginComp()
      )}
    </div>
  );
};

export default Login;
