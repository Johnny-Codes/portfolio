import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const NavBar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    const navbar = document.getElementById('navbar-default');
    if (navbar) {
      observer.observe(navbar);
    }
    return () => {
      if (navbar) {
        observer.unobserve(navbar);
      }
    };
  }, []);

  return (
    <>
      <nav className="border-professional-midgrey">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="text-professional-offwhite font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-black bg-professional-darkgrey border-professional-midgrey">
              <li>
                <button className="py-2 px-4" onClick={() => scrollToSection('about-me')}>About Me</button>
              </li>
              <li>
                <button className="py-2 px-4" onClick={() => scrollToSection('projects')}>Projects</button>
              </li>
              <li>
                <button className="py-2 px-4" onClick={() => scrollToSection('contact-me')}>Contact</button>
              </li>
              <li>
                <button className="py-2 px-4" disabled>Musings - Coming Soon</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {!isNavbarVisible && (
        <button
          onClick={scrollToTop}
          className="animate-fade-in text-3xl fixed bottom-4 right-4 bg-professional-grey text-professional-offwhite p-2 rounded-full hover:bg-professional-yellow hover:text-black border border-professional-yellow transition-colors"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default NavBar;
