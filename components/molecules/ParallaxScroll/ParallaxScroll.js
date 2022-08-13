import { useRef, useEffect } from "react";
import styles from "./ParallaxScroll.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function ParallaxScroll() {
  const parentRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      parentRef.current.children,
      { objectPosition: "50% 0px" },
      {
        objectPosition: "50% -300px",
        ease: "none",
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top bottom",
          end: "80% top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  });

  return (
    <section className={styles.parallaxContainer} ref={parentRef}>
      <Image
        className={styles.background}
        src="/images/pizza-parallax-slider.jpg"
        alt="pizza-parallax-slider"
        layout="fill"
        objectFit="cover"
      ></Image>
    </section>
  );
}

export default ParallaxScroll;
