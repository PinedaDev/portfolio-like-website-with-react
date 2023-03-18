import FooterMedia from './FooterMedia';

import './styles/_footer-section.scss';

const Footer = () => {

  const links = [
    {
      name: 'facebook-link',
      link: 'www.facebook.com',
      faReference: 'fab fa-facebook'
    },
    {
      name: 'instagram-link',
      link: 'www.instagram.com',
      faReference: 'fab fa-instagram'
    },
    {
      name: 'twitter-link',
      link: 'https://www.twitter.com/',
      faReference: 'fab fa-twitter'
    },
  ]

  const showMediaLinks = () => (
    links.map(link => (
      <FooterMedia key={link.name} {...link} />
    ))
  )

  return (
    <footer className="footer_section">
      <span className="footer_section__rights">Powered by <a className="footer_section__rights_link" target="_blank"
        href="https://www.pinedadev.com">PinedaDev</a> ©
        2023
      </span>
      <ul className="footer_section__links_container">
        {showMediaLinks()}
      </ul>
    </footer>
  )
}

export default Footer;