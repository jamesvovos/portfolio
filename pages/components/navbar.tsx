export default function Navbar() {
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons">
          <span className="text-customblue-50 text-3xl">&lt;/&gt; </span>
          developedbyJames
        </h1>
        <ul className="flex items-center">
          <li>
            <a
              className="bg-customblue-50 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
