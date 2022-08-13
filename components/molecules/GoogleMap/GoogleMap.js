import styles from "./GoogleMap.module.scss";

function GoogleMap() {
  return (
    <iframe
      title="GoogleMap"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.6464828362355!2d16.920367116148864!3d52.32241707977731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704508acf26e4bf%3A0x7293dc31a6097b0a!2sMorelowa%204%2C%2061-160%20Czapury!5e0!3m2!1spl!2spl!4v1660381889223!5m2!1spl!2spl"
      className={styles.map}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default GoogleMap;
