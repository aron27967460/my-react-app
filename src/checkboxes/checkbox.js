import React from 'react';
import './checkbox.css';

export function Checkbox({ id, label, checked, onChange, disabled, variant, hideLabel = false,
  noWrapper = false,}) {
  const variantClass ={
    default: 'wrapper-style-default',
    contained:'wrapper-style-contained'
  }[variant];

  const input = (
    <>
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
      {!hideLabel && label && <span className="label-text">{label}</span>}
    </>
  );

  return noWrapper ? (
    input
  ) : (
    <label
      htmlFor={id}
      className={`checkbox-wrapper ${variantClass} ${disabled ? 'disabled' : ''}`}
    >
      {input}
    </label>
  );
}
