import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import { Newsletter } from './Newsletter';

export const MailchimpForm = () => {
  const MAILCHIMP_URL = 'https://gmail.us8.list-manage.com/subscribe/post?u=aada6373a6f07f6d0956195a5&amp;id=2fd9a99821&amp;f_id=004e63e0f0';


  return (
    <>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => <Newsletter status={status} message={message} onValidated={(formData: EmailFormFields) => subscribe(formData)} />}
      />
    </>
  );
};
