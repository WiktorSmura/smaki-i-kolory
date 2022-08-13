import styles from "./Footer.module.scss";
import Logo from "/public/svg/logo.svg";

function Footer() {
  return (
    <section className={styles.footer}>
      <Logo className={styles.logo} />
    </section>
  );
}

export default Footer;
