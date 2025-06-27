import React from "react";
import './footer.css';
import logoLight from '../assets/logo-white.png';
import logoLightMobile from '../assets/logo-white-mobile.png';
import logoDark from '../assets/logo.png';
import logoDarkMobile from '../assets/logo-mobile.png';
import LinkButton from '../buttons/link-button';

export default function Footer({theme = 'light'}){

  const isDark = theme === 'light'; // Use white logos on dark background (which happens in light theme)

  const logo = isDark ? logoLight : logoDark;
  const logoMobile = isDark ? logoLightMobile : logoDarkMobile;

  return(
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="footer-nav-links">
          <LinkButton href="https://aronchen.com/" variant="text" color="inverse">Portfolio →</LinkButton>
          <LinkButton href="https://www.figma.com/community/file/1476306041311160406/anchor-design-system" variant="text" color="inverse">Figma</LinkButton>
          <LinkButton href="https://www.linkedin.com/in/aron-chen/" variant="text" color="inverse">LinkedIn</LinkButton>
          <p>Got a question? Email me at <a href="mailto:aron.pt.chen@gmail.com">aron.pt.chen@gmail.com</a></p>
        </div>
        <div><a href="/">
        <img src={logo} alt="Logo Desktop" className="logo-img desktop-logo" />
        <img src={logoMobile} alt="Logo Mobile" className="logo-img mobile-logo" />
        </a></div>
      </div>
    </footer>
  );
}
