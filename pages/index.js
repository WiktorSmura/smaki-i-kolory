import Head from "next/head";
import Navbar from "../components/organisms/Navbar/Navbar";
import Hero from "../components/organisms/Hero/Hero";
import Menu from "../components/organisms/Menu/Menu";
import Gallery from "../components/organisms/Gallery/Gallery";
import SocialMedia from "../components/molecules/SocialMedia/SocialMedia";
import ParallaxScroll from "../components/molecules/ParallaxScroll/ParallaxScroll";
import InformationSection from "../components/organisms/InformationSection/InformationSection";
import Footer from "../components/organisms/Footer/Footer";
import HamburgerMenu from "../components/organisms/HamburgerMenu/HamburgerMenu";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { hamburgerActive, setHamburgerActive } = useAppContext();
  const route = useRouter().asPath;

  useEffect(() => {
    setHamburgerActive(false);
  }, [route]);

  return (
    <>
      <Head>
        <title>Smaki i Kolory Pizza & Restaurant Czapury</title>
      </Head>
      {hamburgerActive && <HamburgerMenu />}
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <SocialMedia />
      <ParallaxScroll />
      <InformationSection />
      <Footer />
    </>
  );
}
