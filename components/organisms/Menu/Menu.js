import styles from "./Menu.module.scss";
import Heading2 from "/components/atoms/Heading2/Heading2";
import PizzaSlicer from "/public/svg/pizzaslicer-svgrepo-com.svg";
import PizzaSlice from "/public/svg/pizza-svgrepo-com.svg";

function Menu() {
  return (
    <section className={styles.menu}>
      <PizzaSlicer />
      <PizzaSlice />
      <Heading2 text="Menu" />
    </section>
  );
}

export default Menu;
