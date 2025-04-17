import React from 'react';
import './columns.css';

export const Row = ({
  children,
  itemsPerRow = 1, // specify how many items per row on desktop
  rowWidth = 'full'
}) => {
  const className = `row row-width-${rowWidth} items-per-row-${itemsPerRow}`;

  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => (
        <div className="row-item">{child}</div>
      ))}
    </div>
  );
};

export default Row;
