import styles from "./SocialMedia.module.scss";
import InstagramIcon from "/public/svg/instagram-svgrepo-com.svg";

function SocialMedia() {
  return (
    <section className={styles.socialMedia}>
      <InstagramIcon className={styles.icon} />
      <h2 className={styles.heading}>Sprawdź nasz instagram</h2>
    </section>
  );
}

export default SocialMedia;
