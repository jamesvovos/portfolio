export default function Navbar() {
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons text-white">
          <span className="text-customblue-50 text-3xl">&lt;/&gt; </span>
          developedbyJames
        </h1>
        <ul className="flex items-center">
          <li>
            <a
              className="bg-customblue-50 text-white px-4 py-3 rounded-md ml-8"
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
