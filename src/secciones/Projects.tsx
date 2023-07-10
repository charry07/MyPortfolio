import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from '../components/ProjectCard';
import projCalendar from '../assets/img/projCalendar.png';
import projNotes from '../assets/img/projectNotes.png';
import projHeroes from '../assets/img/projHeroesSearch.png';
import projSeriesPelis from '../assets/img/projSeriesPelis.png';
import projGifSearch from '../assets/img/projGifSearch.png';
import projPokedex from '../assets/img/projPokedex.png';

import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Calendario',
      description: 'App fullStack con login para manejar eventos en un calendario (MERN) - [MongoDB,Vite,nodejs] ',
      imgUrl: projCalendar,
      url: 'https://calendar-7ja.pages.dev/',
    },
    {
      title: 'Notas',
      description: 'App con login en GOOGLE para manejar notas (CRUD) - [Firebase,Vite] ',
      imgUrl: projNotes,
      url: 'https://notes-2x1.pages.dev/',
    },
    {
      title: 'Heroes',
      description: 'App con login [Vite , APIs] ',
      imgUrl: projHeroes,
      url: 'https://heroes.pages.dev/',
    },
    {
      title: 'Series y Peliculas',
      description: 'App Para Buscar Series y Peliculas [Vite , APIs]',
      imgUrl: projSeriesPelis,
      url: 'https://charry07.github.io/Series-Peliculas/',
    },
    {
      title: 'Gif-Search',
      description: 'App Para Buscar Gifs [Vite , APIs]',
      imgUrl: projGifSearch,
      url: 'https://charry07.github.io/Gif-Search/',
    },
    {
      title: 'Pokedex',
      description: 'Mi primer projecto una pokedex con paginacion [React] ',
      imgUrl: projPokedex,
      url: 'https://pokemon-api-by-charry.netlify.app/',
    },
  ];

  console.log(projects, ProjectCard);

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>
                    Welcome to my realm of web projects, where frontend and backend converge to create captivating digital experiences. Get ready to explore the magic that lies
                    within each line of code.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id='slideInUp' className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey='second'>
                        <p>Aqui iria el segundo panel de proyectos Prontooo</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>Aqui iria el Tercer panel de proyectos Prontooo</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  );
};
