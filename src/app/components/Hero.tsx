"use client";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <>
      <header className="relative mb-4 overflow-hidden">
        {/* Navigation Component */}
        {/* <Navigation /> */}
        <div
          className="relative w-full overflow-hidden h-screen"
          style={{ paddingTop: "56.25%" }}
        >
          {" "}
          {/* Adjust the paddingTop percentage to match the video's aspect ratio */}
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-screen object-cover z-0"
          >
            <source
              src="/video/coffee-bike-hamburg-bg-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute top-0 left-0 right-0 mt-48 z-10 flex flex-col justify-center items-center pb-4">
          <p className="text-slate-100 mb-12 tracking-wide font-base md:text-base uppercase text-center">
            Kaffee Bike Hamburg
          </p>
          <p className="text-white text-3xl font-sans mb-16 tracking-wide font-extrabold md:text-4xl text-center">
            Ihr Kaffee-Catering im Norden
          </p>{" "}
          <Link
            href="#anfragen"
            className="relative px-6 py-3 font-bold text-black group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-coffeeAccent group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-white group-hover:"></span>
            <span className="relative text-3xl text-white group-hover:text-black">
              Jetzt Anfragen
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}
