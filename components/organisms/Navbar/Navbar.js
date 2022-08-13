import styles from "./Navbar.module.scss";
import Logo from "/public/svg/logo.svg";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <section className={styles.navbar}>
      <Logo className={styles.logo} />
      <button className={styles.barsButton} aria-label="hamburger-menu">
        <FaBars className={styles.bars} />
      </button>
    </section>
  );
}

export default Navbar;
