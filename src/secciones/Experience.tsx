import { Container, Row, Col } from 'react-bootstrap';
import { Briefcase, Calendar, GeoAlt } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Kane Solutions",
      position: "Software Developer",
      location: "Hamilton, Bermuda (Remote)",
      startDate: "Sep 2024",
      endDate: "Present",
      current: true,
      description: [
        "Built responsive UI components using React, HTML, and CSS",
        "Developed backend features with Java, Tapestry, and Clojure Script",
        "Reviewed and refactored code for maintainability and performance",
        "Handled PostgreSQL queries and optimized database access",
        "Improved mobile usability and site responsiveness",
        "Integrated Node.js scripts and supported REST API functionality"
      ],
      technologies: ["React", "Java", "Tapestry", "Clojure Script", "PostgreSQL", "Node.js", "REST API", "HTML", "CSS"]
    },
    {
      id: 2,
      company: "Paradigma Solutions",
      position: "Software Developer",
      location: "Medellín, Antioquia, Colombia (Remote)",
      startDate: "May 2022",
      endDate: "Sep 2024",
      current: false,
      description: [
        "Created clean and efficient code based on specifications",
        "Tested and deployed programs and systems",
        "Repaired and enhanced existing software",
        "Excellent handling of artificial intelligence applications",
        "Worked with agile methodologies and cross-functional teams"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Python", "AI", "SCRUM", "Git"]
    },
    {
      id: 3,
      company: "Freelance Projects",
      position: "Full Stack Developer",
      location: "Medellín, Colombia (Remote)",
      startDate: "Jan 2021",
      endDate: "May 2022",
      current: false,
      description: [
        "Developed custom web applications for various international clients",
        "Created responsive portfolio websites and business management systems",
        "Implemented modern development practices using React and Node.js",
        "Managed complete project lifecycle from planning to deployment",
        "Provided technical consulting and ongoing maintenance support"
      ],
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "CSS", "HTML", "Bootstrap"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Professional Experience</h2>
                  <p>
                    Over 3 years of experience as a Full Stack Software Developer, specializing in creating 
                    efficient and scalable solutions for companies in Colombia, Bermuda, and international clients.
                  </p>
                  
                  <div className="timeline">
                    {experiences.map((exp, index) => (
                      <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-content">
                          <div className="timeline-header">
                            <div className="company-info">
                              <h3>{exp.position}</h3>
                              <h4>{exp.company}</h4>
                              <div className="meta-info">
                                <span className="date">
                                  <Calendar size={16} />
                                  {exp.startDate} - {exp.endDate}
                                  {exp.current && <span className="current-badge">Current</span>}
                                </span>
                                <span className="location">
                                  <GeoAlt size={16} />
                                  {exp.location}
                                </span>
                              </div>
                            </div>
                            <div className="timeline-icon">
                              <Briefcase size={20} />
                            </div>
                          </div>
                          
                          <div className="timeline-body">
                            <ul className="description-list">
                              {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                              ))}
                            </ul>
                            
                            <div className="technologies">
                              <h5>Technologies Used:</h5>
                              <div className="tech-tags">
                                {exp.technologies.map((tech, i) => (
                                  <span key={i} className="tech-tag">{tech}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
