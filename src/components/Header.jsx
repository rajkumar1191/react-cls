import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 style={{textTransform: "uppercase"}}>Welcome to My React App</h1>
    </header>
  );
};

export default Header;