import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { URL_API } from '../env';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({} as any);
  const [formErrors, setFormErrors] = useState({} as any);

  const onFormUpdate = (category: any, value: any) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setButtonText('Sending...');

    // Validar los campos
    const errors = {} as any;
    if (formDetails.firstName.trim() === '') {
      errors.firstName = 'First Name is required';
    }
    if (formDetails.lastName.trim() === '') {
      errors.lastName = 'Last Name is required';
    }
    if (formDetails.email.trim() === '') {
      errors.email = 'Email Address is required';
    }
    if (formDetails.phone.trim() === '') {
      errors.phone = 'Phone No. is required';
    }
    if (formDetails.message.trim() === '') {
      errors.message = 'Message is required';
    }

    // Verificar si hay errores
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setButtonText('Send');
      return; // Detener el envío del formulario si hay errores
    }

    // Si no hay errores, continuar con el envío del formulario
    let response = await fetch(`${URL_API}/SendMailToMe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText('Send');
    setFormDetails(formInitialDetails);
    if (response.status === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>{({ isVisible }) => <img className={isVisible ? 'animate__animated animate__zoomIn' : ''} src={contactImg} alt='Contact Us' />}</TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className='px-1'>
                        <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        {formErrors.firstName && <p className='errorMessage'>{formErrors.firstName}</p>}
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                        {formErrors.lastName && <p className='errorMessage'>{formErrors.lastName}</p>}
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input type='email' value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                        {formErrors.email && <p className='errorMessage'>{formErrors.email}</p>}
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input type='tel' value={formDetails.phone} placeholder='Phone No.' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                        {formErrors.phone && <p className='errorMessage'>{formErrors.phone}</p>}
                      </Col>
                      <Col size={12} className='px-1'>
                        <textarea rows={6} value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        {formErrors.message && <p className='errorMessage'>{formErrors.message}</p>}
                        {status.message && <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>}
                        <button type='submit'>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
