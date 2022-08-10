import styles from "./Hero.module.scss";
import Divider from "/public/svg/wave-divider.svg";

function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span className={styles.red}>Smaki</span>
          <br />
          <span className={styles.orange}>i</span>
          <br />
          <span className={styles.green}>kolory</span>
        </h1>
        <button className={styles.callToAction}>Sprawdź nasze menu</button>
        <Divider className={styles.divider} />
      </section>
    </>
  );
}

export default Hero;
