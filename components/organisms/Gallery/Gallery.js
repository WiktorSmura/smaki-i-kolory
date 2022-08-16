import styles from "./Gallery.module.scss";
import Image from "next/image";

function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.image}>
        <Image
          src="/images/pizza1.jpg"
          layout="fill"
          alt="pizza image"
          objectFit="cover"
        />
        <p>pizza 1</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/pasta1.jpg"
          layout="fill"
          alt="pasta image"
          objectFit="cover"
        />
        <p>pasta 1</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/dessert1.jpg"
          layout="fill"
          alt="dessert image"
          objectFit="cover"
        />
        <p>dessert 1</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/pizza2.jpg"
          layout="fill"
          alt="pizza image"
          objectFit="cover"
        />
        <p>pizza 2</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/dessert2.jpg"
          layout="fill"
          alt="dessert image"
          objectFit="cover"
        />
        <p>dessert 2</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/pasta2.jpg"
          layout="fill"
          alt="pasta image"
          objectFit="cover"
        />
        <p>pasta 2</p>
      </div>
    </section>
  );
}

export default Gallery;
