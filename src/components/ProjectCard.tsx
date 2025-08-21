import { Col } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  url: string;
  githubUrl?: string;
  technologies?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imgUrl, 
  url, 
  githubUrl,
  technologies = []
}) => {
  const handleCardClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div 
        className='proj-imgbx clickable-card'
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
        aria-label={`View ${title} live demo`}
      >
        <img src={imgUrl} alt={title} style={{ height: 220 }} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          
          {technologies.length > 0 && (
            <div className="project-technologies">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          )}
          
          <div className="project-actions">
            {githubUrl && (
              <button 
                className="project-btn github-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubUrl, '_blank');
                }}
                aria-label={`View ${title} on GitHub`}
              >
                <Github size={16} />
                <span>Code</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
