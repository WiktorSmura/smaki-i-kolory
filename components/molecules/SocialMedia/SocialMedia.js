import styles from "./SocialMedia.module.scss";
import InstagramIcon from "/public/svg/instagram-svgrepo-com.svg";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
  return (
    <section className={styles.socialMedia}>
      <a
        href="https://www.instagram.com/smaki_i_kolory/"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.wrapper}>
          <InstagramIcon className={styles.icon} />
          <h2 className={styles.heading}>Instagram</h2>
        </div>
      </a>
      <a
        href="https://www.facebook.com/104422832362389/posts/pfbid0rA3BJmhzTuw6uDX6DJQW6mWEeFfXpjws5qhC5NXvzeMtJ7CHpLEPqnv1hjp9S49ul/?d=n"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.wrapper}>
          <FaFacebookF className={styles.icon} />
          <h2 className={styles.heading}>Facebook</h2>
        </div>
      </a>
    </section>
  );
}

export default SocialMedia;
