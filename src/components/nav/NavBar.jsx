import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp } from 'react-icons/fa';

// Plain anchor links (smooth scrolling comes from CSS) so the nav works on
// every page and crawlers can follow it.
const navLinks = {
  home: [
    { label: 'About Me', href: '#about-me' },
    { label: 'Projects', href: '#projects' },
    { label: 'Website Plans', href: '/websites/', highlight: true },
    { label: 'Contact', href: '#contact-me' },
  ],
  websites: [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Plans', href: '#plans' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Get Started', href: '#intake', highlight: true },
  ],
};

const NavBar = ({ page = 'home' }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

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
              {(navLinks[page] ?? navLinks.home).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block py-2 px-4 hover:text-professional-yellow transition-colors ${
                      link.highlight ? 'text-professional-yellow' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {!isNavbarVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="animate-fade-in text-3xl fixed bottom-4 right-4 bg-professional-grey text-professional-offwhite p-2 rounded-full hover:bg-professional-yellow hover:text-black border border-professional-yellow transition-colors"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

NavBar.propTypes = { page: PropTypes.oneOf(['home', 'websites']) };

export default NavBar;
