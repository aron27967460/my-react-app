import React, { useState } from 'react';
import './chip.css';
import { ReactComponent as CheckIcon } from '../assets/icons/checkmark.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';
import { ReactComponent as AddIcon } from '../assets/icons/add.svg';
import { ReactComponent as CheckCircleIcon } from '../assets/icons/checkmarkCircled.svg';

export function Chip({
  label,
  icon,
  iconName,
  interactionVariant = 'contextual', // 'deletable' | 'checkable' | 'toggle'
  disabled = false,
  className = '',
}) {
  const [selected, setSelected] = useState(false);

  const baseClass = [
    'chip',
    interactionVariant,
    selected ? 'selected' : '',
    disabled ? 'disabled' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (!disabled) {
      setSelected((prev) => !prev);
    }
  };

  const presetIcons = {
    star: <StarIcon />,
    add: <AddIcon />,
    check: <CheckCircleIcon />
  };

  const showCheckmark =
    interactionVariant === 'selectable' && !icon && selected;

  const showDeleteIcon =
    interactionVariant === 'removable' && selected;

  const resolvedIcon = icon || (iconName && presetIcons[iconName]);

  return (
    <button
      type="button"
      className={baseClass}
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={selected}
    >
      {showCheckmark && (
        <span className="chip-icon check-icon" aria-hidden="true"><CheckIcon /></span>
      )}

      {!showCheckmark && resolvedIcon && (
        <span className="chip-icon" aria-hidden="true">{resolvedIcon}</span>
      )}

      <span className="chip-label">{label}</span>

      {showDeleteIcon && (
        <span className="chip-delete-icon" aria-hidden="true"><CloseIcon /></span>
      )}
    </button>
  );
}
