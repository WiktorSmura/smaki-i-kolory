import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.scss";
import Image from "next/image";
import Divider from "/public/svg/wave-divider.svg";
import Logo from "/public/svg/logo.svg";
import { AiOutlineArrowDown } from "react-icons/ai";

function Hero() {
  const advertRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      advertRef.current,
      { x: -1000, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 0.5 }
    );
  });

  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/hero-image.JPG"
          alt="background-image"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
          loading="eager"
          priority
        />
        <Logo className={styles.logo} />
        <div className={styles.advert} ref={advertRef}>
          <h3>Zamów 4 pizze --&gt; zapłać za 3</h3>
          <h3>(czwartą najtańszą otrzymasz GRATIS!)</h3>
        </div>
        <button className={styles.callToAction} aria-label="arrow down">
          <AiOutlineArrowDown className={styles.arrow} />
        </button>
        <Divider className={styles.divider} />
      </section>
    </>
  );
}

export default Hero;
