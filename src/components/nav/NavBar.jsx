const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <a href="#about-me">
            <button>About Me</button>
          </a>
        </li>
        <li>
          <a href="#projects">
            <button>Projects</button>
          </a>
        </li>
        <li>
          <a href="#contact-me">
            <button>Contact</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
