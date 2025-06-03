import React, { forwardRef } from 'react';
import './switch.css';

export const Switch = forwardRef(function Switch({
  checked = false,
  onChange,
  disabled = false,
  id,
  ariaLabel = 'Toggle switch',
}, ref) {
  return (
    <button
      ref={ref}
      id={id}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.preventDefault();
        if (!disabled) onChange(!checked);
      }}

      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onChange(!checked);
        }
      }}

      disabled={disabled}
      className={`switch ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}
    >
      <span className="track">
        <span className="toggle" />
      </span>
    </button>
  );
});
