import styles from "./Heading3.module.scss";

function Heading3({ text }) {
  return <h2 className={styles.heading3}>{text}</h2>;
}

export default Heading3;
