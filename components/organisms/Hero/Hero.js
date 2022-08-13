import styles from "./Hero.module.scss";
import Image from "next/image";
import Divider from "/public/svg/wave-divider.svg";
import Logo from "/public/svg/logo.svg";

function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/restaurant-hero.jpg"
          alt="background-image"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
        <Logo className={styles.logo} />
        <button className={styles.callToAction}>Sprawdź nasze menu</button>
        <Divider className={styles.divider} />
      </section>
    </>
  );
}

export default Hero;
