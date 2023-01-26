import styles from "./Sauces.module.scss";

function Sauces({ sauces }) {
  return (
    <div className={styles.sauces}>
      <h4>Sosy 4 zł</h4>
      {sauces.map((sauce, index) => {
        return <p key={index}>{sauce.name}</p>;
      })}
    </div>
  );
}

export default Sauces;
