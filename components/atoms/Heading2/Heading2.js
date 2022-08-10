import styles from "./Heading2.module.scss";

function Heading2({ text }) {
  return <h2 className={styles.heading2}>{text}</h2>;
}

export default Heading2;
