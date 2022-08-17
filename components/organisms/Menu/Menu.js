import useSWR from "swr";
import styles from "./Menu.module.scss";
import PizzaSlicer from "/public/svg/pizzaslicer-svgrepo-com.svg";
import PizzaSlice from "/public/svg/pizza-svgrepo-com.svg";
import Heading2 from "/components/atoms/Heading2/Heading2";
import MenuNavigation from "../../molecules/MenuNavigation/MenuNavigation";
import MenuItem from "../../molecules/MenuItem/MenuItem";
import Sauces from "../../molecules/Sauces/Sauces";
import { useAppContext } from "../../../context/AppContext";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => JSON.parse(data));

function Menu() {
  const { data, error } = useSWR("/api/menuData", fetcher);
  const { menuValue } = useAppContext();
  const menuItemsRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      menuItemsRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, [menuValue]);

  if (error) return <div>Failed to load</div>;

  if (!data) return <section className={styles.menu}>Loading...</section>;

  return (
    <section className={styles.menu} id="menu">
      <PizzaSlicer className={styles.pizzaSlicer} />
      <Heading2 text="Menu" />
      <MenuNavigation />
      <div className={styles.menuItems} ref={menuItemsRef}>
        {menuValue === "Pizza" && (
          <h3 className={styles.subheading}>Pizza w rozmiarze 32/40 cm</h3>
        )}
        {data[menuValue].map(({ name, description, price }, index) => {
          return (
            <MenuItem
              name={name}
              description={description}
              price={price}
              key={index}
            />
          );
        })}
        {menuValue === "Pizza" && <Sauces sauces={data["Sosy"]} />}
      </div>
      {/* <div className={styles.svgContainer}>
        <PizzaSlice className={styles.pizzaSlice} />
      </div> */}
    </section>
  );
}

export default Menu;
