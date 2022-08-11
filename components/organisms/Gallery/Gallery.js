import styles from "./Gallery.module.scss";
import Image from "next/image";

function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.image}>
        <Image src="/images/pizza1.jpg" layout="fill" alt="pizza image" />
      </div>
      <div className={styles.image}>
        <Image src="/images/pasta1.jpg" layout="fill" alt="pasta image" />
      </div>
      <div className={styles.image}>
        <Image src="/images/dessert1.jpg" layout="fill" alt="dessert image" />
      </div>
      <div className={styles.image}>
        <Image src="/images/pizza2.jpg" layout="fill" alt="pizza image" />
      </div>
      <div className={styles.image}>
        <Image src="/images/dessert2.jpg" layout="fill" alt="dessert image" />
      </div>
      <div className={styles.image}>
        <Image src="/images/pasta2.jpg" layout="fill" alt="pasta image" />
      </div>
    </section>
  );
}

export default Gallery;
