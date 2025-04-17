import React from 'react';
import './list.css';

export default function List({ children }) {
  return (
    <ul>
      {React.Children.map(children, (child, index) => (
        <li key={index} className={`padding-{$paddingType}`}>{child}</li>
      ))}
    </ul>
  );
}

export function ListItem({ children, spacingType = 'condensed'}) {
  let title = null;
  let supportText = null;

  if (Array.isArray(children)) {
    [title, supportText] = children;
  } else {
    title = children;
  }

  return (
    <div className={`spacing-${spacingType}`}>
      <div className="text-label-large">{title}</div>
      {supportText && <div className="text-body-small">{supportText}</div>}
    </div>
  );
}
