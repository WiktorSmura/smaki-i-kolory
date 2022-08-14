import styles from "./Navbar.module.scss";
import Logo from "/public/svg/logo.svg";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../../../context/AppContext";

function Navbar() {
  const { hamburgerActive, setHamburgerActive } = useAppContext();
  return (
    <section className={styles.navbar}>
      <Logo className={styles.logo} />
      <button
        className={styles.barsButton}
        aria-label="hamburger-menu"
        onClick={() => setHamburgerActive(!hamburgerActive)}
      >
        <FaBars className={styles.bars} />
      </button>
    </section>
  );
}

export default Navbar;
