import Navbar from "../components/organisms/Navbar/Navbar";
import Hero from "../components/organisms/Hero/Hero";
import Menu from "../components/organisms/Menu/Menu";
import Gallery from "../components/organisms/Gallery/Gallery";
import SocialMedia from "../components/molecules/SocialMedia/SocialMedia";
import ParallaxScroll from "../components/molecules/ParallaxScroll/ParallaxScroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <SocialMedia />
      <ParallaxScroll />
      <div style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
}
