import './Footer.css';
const socialsArray = [
  // {
  //   name: 'Instagram',
  //   url: 'https://www.instagram.com/lavirgin7/',
  //   icon: 'https://img.icons8.com/ios/50/instagram-new--v1.png'
  // },
  {
    name: 'linkedIn',
    url: 'https://www.linkedin.com/in/virginia-raschia-545196280/',
    icon: 'https://img.icons8.com/ios-filled/50/linkedin.png',
  },
  // {
  //   name: '(not X)',
  //   url: 'https://twitter.com/virginia7_9',
  //   icon: "https://img.icons8.com/ios/50/twitter--v1.png"
  // },
  {
    name: 'gitHub',
    url: 'https://github.com/willCodeForCandy',
    icon: 'https://img.icons8.com/ios-filled/50/github.png',
  },
  {
    name: 'email',
    url: 'mailto:viraschia@gmail.com',
    icon: 'https://img.icons8.com/ios/50/mail.png',
  },
];

const Socials = () => {
  return (
    <>
      {socialsArray.map((social, index) => {
        return (
          <li key={index}>
            <a href={social.url} target="_blank" rel="noopener">
              <img src={social.icon} alt={social.name} />
            </a>
          </li>
        );
      })}
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Made with love by @Viru</p>
      <hr />
      <menu>
        <Socials />
      </menu>
    </footer>
  );
};

export default Footer;
