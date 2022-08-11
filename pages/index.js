import Navbar from "../components/organisms/Navbar/Navbar";
import Hero from "../components/organisms/Hero/Hero";
import Menu from "../components/organisms/Menu/Menu";
import Gallery from "../components/organisms/Gallery/Gallery";
import SocialMedia from "../components/molecules/SocialMedia/SocialMedia";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <SocialMedia />
    </>
  );
}
