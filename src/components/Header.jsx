import styles from "./Header.module.css";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Header = () => {
  const { user, login, logout } = useContext(UserContext);
  console.log(user);
  return (
    <header className={styles.header}>
      <h1 style={{ textTransform: "uppercase" }}>
        Welcome {user.name} to My React App
      </h1>
      <span>
        {user.isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={() => login("Jane Smith")}>Login</button>
        )}
      </span>
    </header>
  );
};

export default Header;
