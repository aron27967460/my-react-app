import React from 'react';
import './columns.css';

export const Row = ({
  children,
  itemsPerRow = 1,
  rowWidth = 'full',
}) => {
  const className = `row row-width-${rowWidth} items-per-row-${itemsPerRow}`;

  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => {
        const columns = child?.props?.columns || 1;
        return (
          <div
            className="row-item"
            style={{ '--col-span': columns }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
