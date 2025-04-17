import React from 'react';
import './card.css';

export const Card = ({
  label,
  imgPreview = '',
  navKey,
  onNavigate,
  href = '',
  target = '_blank',
  rel = 'noopener noreferrer',
  disabled = false
}) => {
  const isExternal = !!href;

  const handleClick = () => {
    if (!disabled && onNavigate && navKey) {
      onNavigate(navKey);
    }
  };

  const cardContent = (
    <>
      <div className="image-wrapper">
        <div
          className="smart-image smart-image-bg"
          style={{ backgroundImage: `url(${imgPreview})` }}
        />
      </div>
      <div className="label-wrapper">
        <span className="label">{label}</span>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        className={`card ${disabled ? 'disabled' : ''}`}
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        onClick={e => disabled && e.preventDefault()}
        aria-disabled={disabled}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <button
      className={`card ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {cardContent}
    </button>
  );
};

export default Card;
