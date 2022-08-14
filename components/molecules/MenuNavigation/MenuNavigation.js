import { useAppContext } from "../../../context/AppContext";
import styles from "./MenuNavigation.module.scss";

function MenuNavigation() {
  const { setMenuValue } = useAppContext();

  return (
    <div className={styles.menuNavigation}>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("pizza");
        }}
      >
        <div className={`${styles.menuIcon} ${styles.green}`}></div>
        <p className={styles.itemDescription}>Pizza</p>
      </button>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("drinks");
        }}
      >
        <div className={`${styles.menuIcon} ${styles.blue}`}></div>
        <p className={styles.itemDescription}>Napoje</p>
      </button>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("desserts");
        }}
      >
        <div className={`${styles.menuIcon} ${styles.orange}`}></div>
        <p className={styles.itemDescription}>Desery</p>
      </button>
    </div>
  );
}

export default MenuNavigation;
