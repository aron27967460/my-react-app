import React, { useState } from 'react';
import './tab.css';

export function Tabs({ children, onTabChange }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabClick = (index) => {
    setSelectedIndex(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <div className="tabs-container">
      {React.Children.map(children, (child, index) => {
        if (child.type === Tab) {
          return React.cloneElement(child, {
            isSelected: index === selectedIndex,
            onClick: () => handleTabClick(index),
          });
        }
        return null;
      })}
    </div>
  );
}

export function Tab({ children, onClick, isSelected }) {
  return (
    <button
      className={`tab ${isSelected ? 'selected' : ''} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
