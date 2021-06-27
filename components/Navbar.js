import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <a className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>Contact</a>
        </li>
      </ul>
      <button>Button</button>
    </nav>
  );
};

export default Navbar;
