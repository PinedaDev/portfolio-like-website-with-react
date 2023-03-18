
type FooterMedia = {
  link: string;
  faReference: string;
}

const FooterMedia = ({ link, faReference }: FooterMedia) => {
  return (
    <>
      <li>
        <a className="footer_section__link" href={link} target="_blank">
          <i className={faReference}></i>
        </a>
      </li>
    </>
  )
}

export default FooterMedia