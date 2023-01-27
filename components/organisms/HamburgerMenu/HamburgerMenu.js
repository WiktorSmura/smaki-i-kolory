import { useEffect, useRef } from "react";
import styles from "./HamburgerMenu.module.scss";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { useAppContext } from "../../../context/AppContext";
import { gsap } from "gsap";

function HamburgerMenu() {
  const { hamburgerActive, setHamburgerActive } = useAppContext();
  const hamburgerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      hamburgerRef.current,
      { y: `-${window.innerHeight}` },
      { y: 0, duration: 1, ease: "sine" }
    );
  });

  const closeAnimation = () => {
    const closeHamburger = () => {
      setHamburgerActive(!hamburgerActive);
    };

    gsap.fromTo(
      hamburgerRef.current,
      { y: 0 },
      {
        y: `-${window.innerHeight}`,
        duration: 1,
        ease: "sine",
        onComplete: closeHamburger,
      }
    );
  };

  return (
    <section className={styles.hamburger} ref={hamburgerRef}>
      <button
        className={styles.close}
        onClick={() => {
          closeAnimation();
        }}
      >
        <ImCross className={styles.cross} />
      </button>
      <Link href="/#menu">Menu</Link>
      <Link href="/#informationSection">Lokalizacja</Link>
      <Link href="/gallery">Galeria</Link>
    </section>
  );
}

export default HamburgerMenu;
