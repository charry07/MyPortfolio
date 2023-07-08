import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import { Icons, Logo } from './';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <MailchimpForm />
          <Col size={12} sm={6}>
            <Logo />
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <Icons />
            <p>Copyright {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
