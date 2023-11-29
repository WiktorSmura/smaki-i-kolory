import styles from "./Sauces.module.scss";

function Sauces({ sauces }) {
  return (
    <div className={styles.sauces}>
      <h4>Sosy i dodatki</h4>
      {sauces.map((sauce, index) => {
        return (
          <div key={index} className={styles.sauce}>
            <p>
              {sauce.name}
              {sauce.price[0] ? " - " + sauce.price + " zł" : ""}
            </p>
            <p className={styles.description}>{sauce.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sauces;
