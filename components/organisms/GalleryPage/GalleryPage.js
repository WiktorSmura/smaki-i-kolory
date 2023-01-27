import styles from "./GalleryPage.module.scss";
import useSWR from "swr";
import { useEffect } from "react";
import { useAppContext } from "../../../context/AppContext";
import { useRouter } from "next/router";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function GalleryPage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/getGalleryImages", fetcher);

  const { hamburgerActive, setHamburgerActive } = useAppContext();
  const route = useRouter().asPath;

  useEffect(() => {
    setHamburgerActive(false);
  }, [route]);

  return (
    <>
      {hamburgerActive && <HamburgerMenu />}

      <section className={styles.galleryPage}>
        {!data && "Loading..."}
        {data && (
          <ul className={styles.images}>
            {data.map((imgPath, index) => (
              <li key={index}>
                <img
                  src={imgPath}
                  alt={`photo-${index}`}
                  className={styles.image}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
