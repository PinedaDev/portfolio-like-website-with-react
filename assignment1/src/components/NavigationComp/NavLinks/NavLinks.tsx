type NavLinksProps = {
  linkNames: string[]
}

const NavLinks = ({ linkNames }: NavLinksProps) => {

  const showLinks = () => {
    return (
      linkNames.map((link: string) => (
        <li key={link} role="none">
          <a href={link === 'home' ? '' : '#' + link.toLowerCase()}
            role="menuitem"
            className="navigation__link">{link}</a>
        </li>
      ))
    )

  }

  return (
    <ul className="navigation__links" id="menubar" role="menubar" aria-label="navigation menu">
      {showLinks()}
    </ul>
  )
}
export default NavLinks