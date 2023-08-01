import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <div className="mb-5 pb-20 md:mb-20 z-10">
      <nav className="w-full absolute pt-5 left-0 right-0 z-10 flex-auto">
        <div className="justify-between px-4 mx-auto lg:max-w-10xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h1 className="text-xl font-burtons">
                  <span className="text-customblue-50 text-3xl">
                    &lt;/&gt;{" "}
                  </span>
                  <span className={isHomePage ? "text-white" : "text-black"}>
                    createdbyJames
                  </span>
                </h1>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-customblue-50 rounded-md outline-none focus:border-white focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <GrClose size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>
          <div className={`font-sourcecode ${navbar ? "z-20" : "z-20"}`}>
            {/* Apply a higher z-index when the mobile dropdown is open */}
            <div
              className={`flex-1 justify-self-center md:pb-0 md:mt-0 ${
                navbar
                  ? "p-height md:p-0 block bg-charcoal-50 rounded-md z-30" // Increase the z-index when the mobile dropdown is open
                  : "hidden md:block"
              }`}
            >
              <ul className="md:pt-4 md:pb-4 items-center justify-center md:flex flex-col md:flex-row z-30">
                {/* ... */}
                <li
                  className={`text-l text-center bg-customblue-50 px-8 py-4 md:rounded-md hover:bg-customblue-250 ${
                    navbar
                      ? "h-20 sm:rounded-none bg-transparent hover:text-customblue-250 hover:bg-transparent text-l font-bold underline" // Increase the z-index when the mobile dropdown is open
                      : "hidden md:block"
                  }`}
                >
                  <a
                    className="z-50"
                    href="https://drive.google.com/uc?export=download&id=1o82i7lxASIbqMBOOAk7Sr0Bh4YsWeyIm"
                    download={"jamesvovos-resume.pdf"}
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
