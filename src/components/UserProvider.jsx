import React, { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", isLoggedIn: false });

  const login = (name) => {
    setUser({ ...user, name, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ name: "", isLoggedIn: false });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
