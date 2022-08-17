import { useAppContext } from "../../../context/AppContext";
import styles from "./MenuNavigation.module.scss";
import { useRef, useEffect } from "react";

function MenuNavigation() {
  const { menuValue, setMenuValue } = useAppContext();
  const parentRef = useRef();

  useEffect(() => {
    const buttons = parentRef.current.children;

    Array.from(buttons).forEach((button) => {
      if (button.querySelector("p").textContent === menuValue) {
        button.querySelector("p").classList.add(styles.active);
      } else {
        button.querySelector("p").classList.remove(styles.active);
      }
    });
  });

  return (
    <div className={styles.menuNavigation} ref={parentRef}>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("Pizza");
        }}
      >
        <div className={`${styles.menuIcon} ${styles.green}`}></div>
        <p className={styles.itemDescription}>Pizza</p>
      </button>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("Zupy");
        }}
      >
        <div className={`${styles.menuIcon} ${styles.blue}`}></div>
        <p className={styles.itemDescription}>Zupy</p>
      </button>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("Makarony");
        }}
      >
        <div className={`${styles.menuIcon} ${styles.orange}`}></div>
        <p className={styles.itemDescription}>Makarony</p>
      </button>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("Sałatki");
        }}
      >
        <div className={`${styles.menuIcon} ${styles.yellow}`}></div>
        <p className={styles.itemDescription}>Sałatki</p>
      </button>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("Burgery");
        }}
      >
        <div className={`${styles.menuIcon} ${styles.pink}`}></div>
        <p className={styles.itemDescription}>Burgery</p>
      </button>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("Inne");
        }}
      >
        <div className={`${styles.menuIcon} ${styles.darkBlue}`}></div>
        <p className={styles.itemDescription}>Inne</p>
      </button>
    </div>
  );
}

export default MenuNavigation;
