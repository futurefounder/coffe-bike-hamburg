"use client";

import { BiSolidCoffeeBean } from "react-icons/bi";
import { TbMilk } from "react-icons/tb";

export default function Benefits() {
  return (
    <div className="bg-white py-6 mb-12 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start  */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center uppercase text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Das Kaffee Catering der besonderen Art
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* text - end  */}

        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {/* feature - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center text-coffeeAccent sm:mb-4 md:h-14 md:w-14">
              <BiSolidCoffeeBean className="h-full w-full" />
            </div>

            <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              Die Besten Bohnen
            </h3>
            <p className="mb-2 text-center text-gray-500">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
          </div>
          {/* feature - end  */}
          {/* feature - start  */}
          <div className="flex flex-col items-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center text-coffeeAccent sm:mb-4 md:h-14 md:w-14">
              <TbMilk className="h-full w-full" />
            </div>

            <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              Qualitäts Milch(alternativen)
            </h3>
            <p className="mb-2 text-center text-gray-500">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
          </div>
          {/* feature - end  */}
          {/* feature - start  */}
          <div className="flex flex-col items-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center text-coffeeAccent sm:mb-4 md:h-14 md:w-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>

            <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              Perfekte Mischung
            </h3>
            <p className="mb-2 text-center text-gray-500">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
          </div>
          {/* feature - end  */}
        </div>
      </div>
    </div>
  );
}
