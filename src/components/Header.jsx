import styles from "./Header.module.css";
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <h1 style={{ textTransform: "uppercase" }}>Welcome to My React App</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/addphoto">Add Photo</Link>{" "}
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>{" "}
        </li>
      </ul>
      <span>
        {isLoggedIn ? <button onClick={logout}>Logout</button> : null}
      </span>
    </header>
  );
};

export default Header;
