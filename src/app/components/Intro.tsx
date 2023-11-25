export default function Intro() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-md px-4 md:px-8">
        <h1 class="mb-4 uppercase text-3xl font-extrabold text-coffeeAccent sm:text-3xl md:mb-6">
          GENIEßEN SIE DEN MOMENT
        </h1>

        <p class="mb-6 text-black font-bold sm:text-lg md:mb-8">
          Erstklassiger Kaffee, einzigartiger Service.
        </p>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
          Wir bieten ein genußvolles Kaffee-Erlebnis. Egal ob bei privaten
          Veranstaltungen oder Firmen-Events. Unser mobiles Kaffee-Catering
          sorgt für das perfekte Kaffeevergnügen an jedem Ort in Hamburg und
          Umgebung.
        </p>
      </div>
      <div
        className="min-h-screen mt-24 bg-cover bg-no-repeat bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      ></div>
    </div>
  );
}
