import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, url }: any) => {
  return (
    <Col size={12} sm={6} md={4} onClick={() => window.open(url)} style={{ cursor: 'pointer' }}>
      <div className='proj-imgbx'>
        <img src={imgUrl} style={{ height: 220 }} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
