import About from "./home/About";
import Articels from "./home/Articels";
import Best_Seller from "./home/Best_Seller";
import HeroSection from "./home/HeroSection";
import Testimony from "./home/Testimony";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Best_Seller />
      <Articels />
      <About />
      <Testimony />
    </>
  );
}
