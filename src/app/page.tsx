import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LogoCloud from "./components/LogoCloud";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Hero />
          <LogoCloud />
          <Benefits />
          <Gallery />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
