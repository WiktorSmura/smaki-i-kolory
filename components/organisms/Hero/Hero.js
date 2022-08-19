import styles from "./Hero.module.scss";
import Image from "next/image";
import Divider from "/public/svg/wave-divider.svg";
import Logo from "/public/svg/logo.svg";
import { AiOutlineArrowDown } from "react-icons/ai";

function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/hero-image.JPG"
          alt="background-image"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
        <Logo className={styles.logo} />
        <button className={styles.callToAction} aria-label="arrow down">
          <AiOutlineArrowDown className={styles.arrow} />
        </button>
        <Divider className={styles.divider} />
      </section>
    </>
  );
}

export default Hero;
