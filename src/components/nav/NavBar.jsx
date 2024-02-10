const NavBar = () => {
  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-white font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
            <li>
              <a href="#">Musings - Coming Soon</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
