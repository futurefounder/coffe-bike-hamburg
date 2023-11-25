import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LogoCloud from "./components/LogoCloud";
import Intro from "./components/Intro";
import Anfragen from "./components/Anfragen";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Hero />
          <Intro />
          <LogoCloud />
          <Benefits />
          <Anfragen />
          <Gallery />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
