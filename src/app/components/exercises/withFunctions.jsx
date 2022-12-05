import React from "react";

import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
  const isAuth = !!localStorage.getItem("auth");
  const handleLogin = () => {
    localStorage.setItem("auth", "token");
  };
  const handleLogOut = () => {
    localStorage.removeItem("auth");
  };
  console.log(isAuth);
  return (
    <CardWrapper>
      <Component
        onLogin={handleLogin}
        onLogOut={handleLogOut}
        isAuth={isAuth}
        {...props}
      />
    </CardWrapper>
  );
};

export default withFunctions;
