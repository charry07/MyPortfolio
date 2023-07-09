import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import { Newsletter } from './Newsletter';
import { MAILCHIMP_URL } from '../env';

export const MailchimpForm = () => {
  return (
    <>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => <Newsletter status={status} message={message} onValidated={(formData: EmailFormFields) => subscribe(formData)} />}
      />
    </>
  );
};
