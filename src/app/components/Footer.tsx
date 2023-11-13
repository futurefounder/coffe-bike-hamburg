export default function Footer() {
  return (
    <footer className="bg-coffeePrimary text-white p-4">
      <p className="text-center text-slate-100">
        &copy; {new Date().getFullYear()} - All Rights Reserved
      </p>
    </footer>
  );
}
