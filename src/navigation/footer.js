import React from "react";
import './footer.css';
import logo from '../assets/logo-white.png';
import logoMobile from '../assets/logo-white-mobile.png';
import LinkButton from '../buttons/link-button';

export default function Footer(){
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
