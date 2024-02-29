import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      name: 'React',
      img: meter1,
    },
    {
      name: 'TypeScript',
      img: meter2,
    },
    {
      name: 'Git',
      img: meter3,
    },
    {
      name: 'Nodejs',
      img: meter1,
    },
    {
      name: 'Docker',
      img: meter2,
    },
    {
      name: 'Power platform',
      img: meter2,
    },
    {
      name: 'Nextjs',
      img: meter2,
    },
    {
      name: 'Sharepoint API',
      img: meter2,
    },
    {
      name: 'css',
      img: meter2,
    }

  ];

  return (
    <section className='skill'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                I'm a Software Developer Fullstack | React | TypeScript | Git | Node | Next | Sharepoint API | Docker | Power platform.
              </p>
              <Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider'>
                {skills.map((skill, I) => (
                  <div className='item' key={I}>
                    <div className='skill-item'>
                      <img src={skill.img} alt={skill.name} />
                      <h3>{skill.name}</h3>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};
