import { useRef, useEffect } from "react";
import styles from "./ParallaxScroll.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function ParallaxScroll() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.fromTo(
  //     imageRef.current,
  //     { objectPosition: "top" },
  //     {
  //       objectPosition: "50%",
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: imageRef.current,
  //         start: "top bottom",
  //         end: "80% top",
  //         scrub: true,
  //         invalidateOnRefresh: true,
  //         markers: true,
  //       },
  //     }
  //   );
  // });

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
