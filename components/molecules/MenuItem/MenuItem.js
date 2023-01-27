import styles from "./MenuItem.module.scss";

function MenuItem({
  name = "Nazwa dania",
  description = "Opis dania",
  price = [],
}) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItemName}>
        <p>{name.toUpperCase()}</p>

        {price[0] && (
          <>
            <span className={styles.line} />
            <p>{price.join(" / ")} zł</p>
          </>
        )}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default MenuItem;
