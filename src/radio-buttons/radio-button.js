import React from 'react';
import './radio-button.css';

export function RadioGroup({ name, options = [], value, onChange, disabled, align = 'left', children }) {
  const alignmentClass = align === 'center' ? 'align-center' : 'align-left';

  if (children) {
    const clonedChildren = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;

      return React.cloneElement(child, {
        disabled: disabled || child.props.disabled,
      });
    });

    return (
      <fieldset className={`radio-group ${alignmentClass}`} role="radiogroup" aria-disabled={disabled}>
        {clonedChildren}
      </fieldset>
    );
  }

  if (options.length < 2) {
    console.warn('RadioGroup requires at least 2 options.');
    return null;
  }

  return (
    <fieldset className={`radio-group ${alignmentClass}`} role="radiogroup" aria-disabled={disabled}>
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={option.id}
          name={name}
          label={option.label}
          checked={value === option.id}
          onChange={() => onChange(option.id)}
          disabled={disabled || option.disabled}
        />
      ))}
    </fieldset>
  );
}

function RadioButton({ id, name, label, checked, onChange, disabled }) {
  return (
    <label htmlFor={id} className={`radio-wrapper ${disabled ? 'disabled' : ''}`}>
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
