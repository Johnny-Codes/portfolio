import { FaArrowUp } from 'react-icons/fa';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {" "}
      <nav className="border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="text-white font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button onClick={() => scrollToSection("about-me")}>
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")}>
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact-me")}>
                  Contact
                </button>
              </li>
              <li>
                <button disabled>Musings - Coming Soon</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        onClick={scrollToTop}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default NavBar;
