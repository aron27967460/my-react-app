import React from "react";
import './masthead.css';
import logo from '../assets/logo.png';
import LinkButton from '../buttons/link-button';

export default function Masthead(){
  return(
    <header className="masthead-wrapper">
      <div className="masthead">
        <div><a href="/"><img src={logo} alt="Logo" className="logo-img" /></a></div>
        <div className="nav-links">
          <LinkButton href="https://aronchen.com/" variant="text" color="default">Portfolio →</LinkButton>
          <LinkButton href="https://www.figma.com/community/file/1476306041311160406/anchor-design-system" variant="text" color="default">Figma</LinkButton>
          <LinkButton href="/contact" variant="text" color="default">Contact</LinkButton>
        </div>
      </div>
    </header>
  );
}
