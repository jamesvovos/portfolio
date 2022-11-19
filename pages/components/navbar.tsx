import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons">developedbyJames</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer" />
          </li>
          <li>
            <a
              className="bg-customblue-50 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              .resume()
            </a>
          </li>
          <li>
            <a
              className="bg-customblue-50 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              .contact()
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
