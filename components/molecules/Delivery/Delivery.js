import styles from "./Delivery.module.scss";
import Heading2 from "../../atoms/Heading2/Heading2";

function Delivery() {
  return (
    <section className={styles.delivery}>
      <Heading2 text="Dowóz" />
      <div className={styles.deliveryItem}>
        <p>1. Dostawa gratis powyżej 30 zł, do 30 zł opłata 4 zł</p>
        <p className={styles.places}>
          Czapury, Babki, Wiórek, Głuszyna, Daszewice
        </p>
      </div>
      <div className={styles.deliveryItem}>
        <p>2. Dostawa gratis powyżej 40 zł, do 40 zł opłata 8 zł</p>
        <p className={styles.places}>
          Marlewo, Sypniewo, Starołęka do przejazdu PKP, Kamionki, Miniowo,
          Krzesiny
        </p>
      </div>
    </section>
  );
}

export default Delivery;
