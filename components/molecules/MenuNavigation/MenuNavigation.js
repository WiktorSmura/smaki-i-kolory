import { useAppContext } from "../../../context/AppContext";
import styles from "./MenuNavigation.module.scss";
import MenuPizza from "/public/svg/pizza-menu-svgrepo-com.svg";
import MenuDrink from "/public/svg/hot-drink-svgrepo-com.svg";
import MenuDessert from "/public/svg/pancakes-svgrepo-com.svg";

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
        <MenuPizza className={styles.menuIcon} />
        <p className={styles.itemDescription}>Pizza</p>
      </button>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("drinks");
        }}
      >
        <MenuDrink className={styles.menuIcon} />
        <p className={styles.itemDescription}>Napoje</p>
      </button>
      <button
        className={styles.menuNavigationItem}
        onClick={() => {
          setMenuValue("desserts");
        }}
      >
        <MenuDessert className={styles.menuIcon} />
        <p className={styles.itemDescription}>Desery</p>
      </button>
    </div>
  );
}

export default MenuNavigation;
