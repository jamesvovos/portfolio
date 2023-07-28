import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-burtons">
            <span className="text-customblue-50 text-3xl">&lt;/&gt; </span>
            <span className={isHomePage ? "text-white" : "text-black"}>
              createdbyJames
            </span>
          </h1>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <a
              className="bg-customblue-50 px-4 py-3 rounded-md hover:bg-customblue-250"
              href="https://drive.google.com/uc?export=download&id=1zX3mgKcYyP1l9mqTXPRjvjVDG2XfGjSO"
              download={"jamesvovos-resume.pdf"}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
