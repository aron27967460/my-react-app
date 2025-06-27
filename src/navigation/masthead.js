import React from "react";
import './masthead.css';
import logoLight from '../assets/logo.png';
import logoLightMobile from '../assets/logo-mobile.png';
import logoDark from '../assets/logo-white.png';
import logoDarkMobile from '../assets/logo-white-mobile.png';
import LinkButton from '../buttons/link-button';
import Button from '../buttons/button';

export default function Masthead({onToggleMenu, theme = 'light'}){

  const isDark = theme === 'dark';

  const logo = isDark ? logoDark : logoLight;
  const logoMobile = isDark ? logoDarkMobile : logoLightMobile;

  const MenuIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 7H18V8.5H6V7Z"/>
    <path d="M6 11.25H18V12.75H6L6 11.25Z"/>
    <path d="M6 15.5H18V17H6V15.5Z"/>
    </svg>
);

  return(

    <header className="masthead-wrapper">
      <div className="masthead">
        <div className="menu"><Button variant="text" icon={MenuIcon} iconPosition="left" onClick={() => {onToggleMenu();}}></Button></div>
        <div><a href="/">
        <img src={logo} alt="Logo Desktop" className="logo-img desktop-logo" />
        <img src={logoMobile} alt="Mobile Logo" className="logo-img mobile-logo" />
        </a></div>
        <div className="nav-links">
          <LinkButton href="https://aronchen.com/" variant="text" color="default">Portfolio →</LinkButton>
          <LinkButton href="https://www.figma.com/community/file/1476306041311160406/anchor-design-system" variant="text" color="default">Figma</LinkButton>
          <LinkButton href="mailto:aron.pt.chen@gmail.com" variant="text" color="default">Contact</LinkButton>
        </div>
      </div>
    </header>
  );
}
