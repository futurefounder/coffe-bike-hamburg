export default function Navigation() {
  return (
    // <div className="mx-auto max-w-screen-xs px-4 md:px-8 z-99">
    <header className="absolute top-0 w-full z-20 flex justify-between items-center py-4 md:py-8">
      {/* <!-- logo - start --> */}
      <a
        href="/"
        className="inline-flex items-center ml-6 gap-2.5 text-xs font-bold text-white md:text-base"
        aria-label="logo"
      >
        <svg
          width="95"
          height="94"
          viewBox="0 0 95 94"
          className="h-auto w-6 text-coffeeAccent"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>
        Coffee Bike Hamburg
      </a>
      {/* <!-- logo - end --> */}

      {/* <!-- nav - start --> */}
      <nav className="hidden gap-12 lg:flex">
        <a href="#" className="text-lg font-semibold text-coffeeAccent">
          Home
        </a>
        <a
          href="#"
          className="text-lg font-semibold text-white transition duration-100 hover:text-coffeeAccent active:text-coffeeAccentDark"
        >
          Events
        </a>
        <a
          href="#"
          className="text-lg font-semibold text-white transition duration-100 hover:text-coffeeAccent active:text-coffeeAccentDark"
        >
          Über uns
        </a>
        <a
          href="#"
          className="text-lg font-semibold text-white transition duration-100 hover:text-coffeeAccent active:text-coffeeAccentDark"
        >
          Gallery
        </a>
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <a
        href="#"
        className="mr-6 hidden rounded uppercase bg-coffeeAccent px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-coffeeAccent hover:text-black focus-visible:ring active:text-black md:text-base lg:inline-block"
      >
        Jetzt Anfragen
      </a>

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Menu
      </button>
      {/* <!-- buttons - end --> */}
    </header>
    // </div>
  );
}
