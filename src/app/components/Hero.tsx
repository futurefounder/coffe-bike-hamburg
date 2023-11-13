import Navigation from "./Navigation";

export default function Hero() {
  return (
    <>
      <header className="relative mb-12 overflow-hidden h-screen">
        {/* Navigation Component */}
        <Navigation />

        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="/video/coffee-bike-hamburg-bg-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
    </>
  );
}
