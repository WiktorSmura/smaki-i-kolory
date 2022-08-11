import { useRef, useEffect } from "react";
import styles from "./ParallaxScroll.module.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function ParallaxScroll() {
  const parentRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      parentRef.current.children,
      { backgroundPosition: "50% 0px" },
      {
        backgroundPosition: "50% -300px",
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
      <div className={styles.background}></div>
    </section>
  );
}

export default ParallaxScroll;
