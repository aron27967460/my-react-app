import React from 'react';
import './radio-button.css';

export function RadioGroup({ name, options = [], value, onChange, disabled, variant = 'default' }) {
  if (options.length < 2) {
    console.warn('RadioGroup requires at least 2 options.');
    return null;
  }

  return (
    <fieldset className="radio-group" role="radiogroup" aria-disabled={disabled}>
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={option.id}
          name={name}
          label={option.label}
          checked={value === option.id}
          onChange={() => onChange(option.id)}
          disabled={disabled || option.disabled}
          variant={variant}
        />
      ))}
    </fieldset>
  );
}

function RadioButton({ id, name, label, checked, onChange, disabled, variant }) {
  const variantClass = {
    default: 'wrapper-style-default',
    border: 'wrapper-style-border',
  }[variant];

  return (
    <label htmlFor={id} className={`radio-wrapper ${variantClass} ${disabled ? 'disabled' : ''}`}>
      {label && <span className="label-text">{label}</span>}
      <input
        id={id}
        name={name}
        type="radio"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={checked}
        aria-disabled={disabled}
      />
      <span className="radiomark" />
    </label>
  );
}

export { RadioButton };
