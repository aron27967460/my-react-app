import React, { useState } from 'react';
import './tab.css';

export function Tabs({ children, onTabChange, tabsStyle, tabStyle, tabsLevel }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabClick = (index, disabled) => {
    if (disabled) return;
    setSelectedIndex(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  // Decide which style to apply
  const containerClass = tabsStyle === 'elevated'
    ? 'tabs-style-elevated'
    : 'tabs-style-divider';

  const level = tabsLevel === 'sub'
    ? 'sub-level'
    : 'top-level';

  return (
    <div className={`tabs-container ${containerClass} ${level}`}>
      {React.Children.map(children, (child, index) => {
        if (child.type === Tab) {
          const isDisabled = child.props.disabled;
          return React.cloneElement(child, {
            isSelected: index === selectedIndex,
            onClick: () => handleTabClick(index, isDisabled),
            ...(tabStyle && !child.props.tabStyle && { tabStyle }),
          });
        }
        return null;
      })}
    </div>
  );
}

export function Tab({ children, onClick, isSelected, tabStyle, disabled = false }) {
  const tabClass = tabStyle === 'small'
    ? 'tab-style-small'
    : 'tab-style-default';

  return (
    <button
      className={`tab ${tabClass} ${isSelected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
