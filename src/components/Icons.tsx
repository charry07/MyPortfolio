import LinkedinIcon from '../assets/img/nav-icon1.svg';
import FacebookIcon from '../assets/img/nav-icon2.svg';
import InstagramIcon from '../assets/img/nav-icon3.svg';
import GitHubIcon from '../assets/img/github-mark-white.svg';
import Stack from '../assets/img/stackOverflowIcon.png';

export const Icons = () => {
  const socialMedia = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/charry07',
      icon: LinkedinIcon,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/charry07',
      icon: GitHubIcon,
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/15453981/charry07',
      icon: Stack,
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/4Charry07',
      icon: FacebookIcon,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/4charry07',
      icon: InstagramIcon,
    },
  ];


  return (
    <div className='social-icon'>
      {socialMedia.map((item, index) => (
        <a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
          <img src={item.icon} alt={item.name} />
        </a>
      ))}
    </div>
  );

  
};
