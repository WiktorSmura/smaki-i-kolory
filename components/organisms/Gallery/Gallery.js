import styles from "./Gallery.module.scss";
import Image from "next/image";

function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.image}>
        <Image
          src="/images/pizza-rzeznicka.JPG"
          layout="fill"
          alt="pizza image"
          objectFit="cover"
        />
        <p>Pizza rzeźnicka</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/bolognese.JPG"
          layout="fill"
          alt="pasta image"
          objectFit="cover"
        />
        <p>Makaron arrabiatta</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/krem-pomidorowy.JPG"
          layout="fill"
          alt="tomato soup"
          objectPosition={"top"}
          objectFit="cover"
        />
        <p>Krem pomidorowy</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/salatka-grecka.JPG"
          layout="fill"
          alt="greek salad"
          objectFit="cover"
        />
        <p>Sałatka grecka</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/pizza-cztery-sery.JPG"
          layout="fill"
          alt="pizza 4 cheese image"
          objectFit="cover"
        />
        <p>Pizza cztery sery</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/carbonara.JPG"
          layout="fill"
          alt="carbonara image"
          objectFit="cover"
        />
        <p>Makaron carbonara</p>
      </div>
    </section>
  );
}

export default Gallery;
