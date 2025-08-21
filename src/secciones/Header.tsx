import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Logo } from '../components/Logo';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import { Icons } from '../components';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
    setExpanded(false); // Cerrar el menú al hacer click en un enlace
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Router>
      <Navbar 
        expand="lg" 
        expanded={expanded}
        className={scrolled ? 'scrolled' : ''}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href='/'>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls='basic-navbar-nav'
            onClick={handleToggle}
            className="custom-toggler"
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link 
                href='#home' 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href='#skills' 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href='#projects' 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                href='#experience' 
                className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('experience')}
              >
                Experience
              </Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <Icons />
              <HashLink to='#connect'>
                <button 
                  className='vvd'
                  onClick={() => setExpanded(false)}
                >
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
