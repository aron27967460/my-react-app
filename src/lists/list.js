import React, { useState, useRef, useEffect } from 'react';
import './list.css';

export function List({ children, vPadding = '0x', interactiveHighlight = false }) {
  return (
    <ul role="list" className="list">
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { vPadding, interactiveHighlight })
          : child
      )}
    </ul>
  );
}

export function ListItem({
  as: Component = 'div',
  href,
  onClick,
  leading,
  trailing,
  title,
  supportText,
  vPadding = '0x',
  interactiveHighlight = false,
  disabled = false,
}) {
  const inputRef = useRef(null);
  const [selected, setSelected] = useState(false);
  const hasSupport = !!supportText;
  const isInteractive = Component === 'a' || Component === 'button';
  const highlightClass = interactiveHighlight && !disabled ? 'interactive' : '';

  const handleItemClick = e => {
    if (disabled) return;

    const tag = e.target?.tagName?.toLowerCase();

    // Ignore direct clicks on interactive elements
    if (['input', 'button', 'label'].includes(tag)) return;
    if (e.target.closest('input, button, label')) return;

    // Simulate input click if available
    if (inputRef.current) {
      inputRef.current.click?.();
    }

    onClick?.(e);
  };

  const handleInputChange = e => {
    if (disabled) return;

    // SAFELY check target and its checked property
    const isChecked = e?.target?.checked;
    if (typeof isChecked === 'boolean') {
      setSelected(isChecked);
    }
  };

  const enhanceSlot = slot => {
    if (!React.isValidElement(slot)) return slot;

    const isSwitch = slot.type?.name === 'Switch';
    const isCheckbox = slot.props.type === 'checkbox';

    const originalOnChange = slot.props.onChange;
    const originalOnClick = slot.props.onClick;

    const commonProps = {
      disabled,
      ref: inputRef,
    };

    if (isSwitch) {
      return React.cloneElement(slot, {
        ...commonProps,
        checked: selected,
        onChange: (nextChecked) => {
          setSelected(nextChecked);
          originalOnChange?.(nextChecked);
        },
      });
    }

    if (isCheckbox) {
      return React.cloneElement(slot, {
        ...commonProps,
        checked: selected,
        onChange: (e) => {
          const nextChecked = e?.target?.checked;
          if (typeof nextChecked === 'boolean' && selected !== nextChecked) {
            setSelected(nextChecked);
          }
          originalOnChange?.(e);
        },
      });
    }

    return React.cloneElement(slot, {
      ...commonProps,
      onClick: originalOnClick,
      onChange: originalOnChange,
    });
  };

  const baseProps = {
    href: disabled ? undefined : href,
    onClick: handleItemClick,
    'aria-disabled': disabled || undefined,
    className: `list-item v-padding-${vPadding} ${highlightClass} ${hasSupport ? 'with-support' : ''} ${
      disabled ? 'is-disabled' : ''
    } ${selected ? 'is-selected' : ''}`,
    role: isInteractive ? undefined : 'listitem',
    tabIndex: disabled ? -1 : undefined,
  };

  return (
    <Component {...baseProps}>
      {leading && <div className="list-item-left" aria-hidden="true">{enhanceSlot(leading)}</div>}
      <div className="list-item-content">
        <div className="list-item-title text-label-large">{title}</div>
        {supportText && <div className="list-item-support text-body-small">{supportText}</div>}
      </div>
      {trailing && <div className="list-item-right">{enhanceSlot(trailing)}</div>}
    </Component>
  );
}
