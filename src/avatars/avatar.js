import React, { useState } from 'react';
import '../avatars/avatar.css';

export function Avatar({
  src,
  alt = '',
  fallback = '',
  size = 40,
  rounded = true,
}) {
  const [hasError, setHasError] = useState(false);
  const showFallback = !src || hasError;

  return (
    <div
      className={`avatar-wrapper text-title-small ${rounded ? 'avatar-rounded' : ''}`}
      style={{ width: size, height: size, fontSize: size / 2 }}
      aria-label={alt}
      role="img"
    >
      {showFallback ? (
        <span className="avatar-fallback" aria-hidden={!alt}>
          {fallback}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          className="avatar-img"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
