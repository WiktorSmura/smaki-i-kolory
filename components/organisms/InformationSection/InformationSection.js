import styles from "./InformationSection.module.scss";
import Heading2 from "../../atoms/Heading2/Heading2";
import Phone from "/public/svg/phone-svgrepo-com.svg";
import Calendar from "/public/svg/calendar-svgrepo-com.svg";
import PlaceMarker from "/public/svg/place-marker-svgrepo-com.svg";
import GoogleMap from "/components/molecules/GoogleMap/GoogleMap";

function InformationSection() {
  return (
    <section className={styles.informationSection}>
      <Heading2 text="Tu nas znajdziesz" />
      <div className={styles.informationElement}>
        <Phone />
        <p>
          885 838 384
          <br />
          885 830 043
        </p>
      </div>
      <div className={styles.informationElement}>
        <PlaceMarker />
        <p>ul.Morelowa 4a lok. 2, Czapury 61-160</p>
      </div>
      <div className={styles.informationElement}>
        <Calendar />
        <p>
          Pn-Pt 10-20
          <br />
          Sb-Nd 12-22
        </p>
      </div>
      <GoogleMap />
    </section>
  );
}

export default InformationSection;
