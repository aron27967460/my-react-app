import React from 'react';
import './card.css';

export const Card = ({
  label,
  tag,
  imgPreview = '',
  cardStyle = 'default',
  navKey,
  onNavigate,
  href = '',
  target = '_blank',
  rel = 'noopener noreferrer',
  cardWidth = '',
  disabled = false
}) => {
  const isExternal = !!href;

  const handleClick = () => {
    if (!disabled && onNavigate && navKey) {
      onNavigate(navKey);
      window.scrollTo({ top: 0, behavior: 'instant' });
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

      {(tag || label) && (
        <div className="label-wrapper">
          {tag && <span className="tag">{tag}</span>}
          {label && <span className="label">{label}</span>}
        </div>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        className={`card card-style-${cardStyle} ${disabled ? 'disabled' : ''}`}
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        onClick={e => disabled && e.preventDefault()}
        style={cardWidth ? { width: cardWidth } : undefined}
        aria-disabled={disabled}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <button
      className={`card card-style-${cardStyle} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      style={cardWidth ? { width: cardWidth } : undefined}
      disabled={disabled}
    >
      {cardContent}
    </button>
  );
};

export default Card;
