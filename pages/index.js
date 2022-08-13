import Head from "next/head";
import Navbar from "../components/organisms/Navbar/Navbar";
import Hero from "../components/organisms/Hero/Hero";
import Menu from "../components/organisms/Menu/Menu";
import Gallery from "../components/organisms/Gallery/Gallery";
import SocialMedia from "../components/molecules/SocialMedia/SocialMedia";
import ParallaxScroll from "../components/molecules/ParallaxScroll/ParallaxScroll";
import InformationSection from "../components/organisms/InformationSection/InformationSection";
import Footer from "../components/organisms/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smaki i kolory</title>
      </Head>
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
