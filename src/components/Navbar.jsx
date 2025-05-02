import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Bio } from '../utils/Constants';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.navbarBg};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkScroll)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 1.8rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(LinkScroll)`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after, &:focus-visible::after {
    width: 100%;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
  
  &.active {
    color: ${({ theme }) => theme.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bgLight};
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: ${({ isOpen }) => (isOpen ? '999' : '-1')};
`;

const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  width: 100%;
  height: 100%;
`;

const MobileMenuLink = styled(LinkScroll)`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileMenuBtn = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const GithubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 1.2rem;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
  }

  @media screen and (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const ThemeToggler = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 50%;
  
  &:hover, &:focus-visible {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.cardLight};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle ESC key press to close mobile menu
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <NavLogo to="hero" smooth={true} duration={500} aria-label="Home">
          <Logo>SV</Logo>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
          <FaBars />
        </MobileIcon>
        <NavItems role="navigation">
          <NavLink to="about" smooth={true} duration={500} spy={true} activeClass="active" tabIndex={0}>
            About
          </NavLink>
          <NavLink to="skills" smooth={true} duration={500} spy={true} activeClass="active" tabIndex={0}>
            Skills
          </NavLink>
          <NavLink to="experience" smooth={true} duration={500} spy={true} activeClass="active" tabIndex={0}>
            Experience
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500} spy={true} activeClass="active" tabIndex={0}>
            Projects
          </NavLink>
          <NavLink to="education" smooth={true} duration={500} spy={true} activeClass="active" tabIndex={0}>
            Education
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500} spy={true} activeClass="active" tabIndex={0}>
            Contact
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <ThemeToggler 
            onClick={toggleTheme} 
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </ThemeToggler>
          <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="Github Profile">Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} aria-hidden={!isOpen} role="dialog" aria-modal="true">
        <MobileMenuBtn onClick={closeMenu} aria-label="Close menu">
          <FaTimes />
        </MobileMenuBtn>
        <MobileMenuItems role="menu">
          <ThemeToggler 
            onClick={toggleTheme} 
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </ThemeToggler>
          <MobileMenuLink to="about" onClick={closeMenu} smooth={true} duration={500} role="menuitem" tabIndex={0}>
            About
          </MobileMenuLink>
          <MobileMenuLink to="skills" onClick={closeMenu} smooth={true} duration={500} role="menuitem" tabIndex={0}>
            Skills
          </MobileMenuLink>
          <MobileMenuLink to="experience" onClick={closeMenu} smooth={true} duration={500} role="menuitem" tabIndex={0}>
            Experience
          </MobileMenuLink>
          <MobileMenuLink to="projects" onClick={closeMenu} smooth={true} duration={500} role="menuitem" tabIndex={0}>
            Projects
          </MobileMenuLink>
          <MobileMenuLink to="education" onClick={closeMenu} smooth={true} duration={500} role="menuitem" tabIndex={0}>
            Education
          </MobileMenuLink>
          <MobileMenuLink to="contact" onClick={closeMenu} smooth={true} duration={500} role="menuitem" tabIndex={0}>
            Contact
          </MobileMenuLink>
          <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="Github Profile" role="menuitem" tabIndex={0}>
            Github Profile
          </GithubButton>
        </MobileMenuItems>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
