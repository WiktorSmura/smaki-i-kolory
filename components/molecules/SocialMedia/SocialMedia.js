import styles from "./SocialMedia.module.scss";
import InstagramIcon from "/public/svg/instagram-svgrepo-com.svg";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
  return (
    <section className={styles.socialMedia}>
      <div className={styles.wrapper}>
        <InstagramIcon className={styles.icon} />
        <h2 className={styles.heading}>Instagram</h2>
      </div>
      <div className={styles.wrapper}>
        <FaFacebookF className={styles.icon} />
        <h2 className={styles.heading}>Facebook</h2>
      </div>
    </section>
  );
}

export default SocialMedia;
