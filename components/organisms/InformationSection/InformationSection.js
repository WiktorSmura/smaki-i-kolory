import styles from "./InformationSection.module.scss";
import Heading2 from "../../atoms/Heading2/Heading2";
import Phone from "/public/svg/phone-svgrepo-com.svg";
import Calendar from "/public/svg/calendar-svgrepo-com.svg";
import PlaceMarker from "/public/svg/place-marker-svgrepo-com.svg";
import GoogleMap from "/components/molecules/GoogleMap/GoogleMap";

function InformationSection() {
  return (
    <section className={styles.informationSection} id="informationSection">
      <div className={styles.informationWrapper}>
        <Heading2 text="Tu nas znajdziesz" />
        <div className={styles.informationElement}>
          <Phone className={styles.icon} />
          <p>
            <a href="tel:885-838-384">+48 885-838-384</a>
          </p>
        </div>
        <div className={styles.informationElement}>
          <PlaceMarker className={styles.icon} />
          <p>ul.Morelowa 4a lok. 2, Czapury 61-160</p>
        </div>
        <div className={styles.informationElement}>
          <Calendar className={styles.icon} />
          <p>Pn-Nd 12-22</p>
        </div>
      </div>
      <GoogleMap />
    </section>
  );
}

export default InformationSection;
