import { useRef, useEffect } from "react";
import styles from "./ParallaxScroll.module.scss";
import Image from "next/image";

function ParallaxScroll() {

  return (
    <section className={styles.parallaxContainer}>
      <Image
        className={styles.background}
        src="/images/parallax-image.JPG"
        alt="parallax-slider"
        layout="fill"
        objectFit="cover"
        objectPosition={"top"}
      ></Image>
    </section>
  );
}

export default ParallaxScroll;
