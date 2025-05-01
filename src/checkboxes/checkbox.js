import React from 'react';
import './checkbox.css';

export function Checkbox({ id, label, checked, onChange, disabled, variant}) {
  const variantClass ={
    default: 'wrapper-style-default',
    border:'wrapper-style-border'
  }[variant];

  return (
    <label htmlFor={id} className={`checkbox-wrapper ${variantClass} ${disabled ? 'disabled' : ''}`}>
      {label && <span className="label-text">{label}</span>}
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={checked}
        aria-disabled={disabled}
      />
      <span className="checkmark" />
    </label>
  );
}
