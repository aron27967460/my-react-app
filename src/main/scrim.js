import React from 'react';
import './main-content-module.scss';

export default function Scrim({ isVisible, onClick }) {
  if (!isVisible) return null;

  return (
    <div className="scrim" onClick={onClick} />
  );
}
