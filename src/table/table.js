import React from 'react';
import './table.css';
import '../styles/typography.css';

export const Table = ({ columns, data }) => {
  // Step 1: Calculate how much width is already taken by flex
  const totalDefinedWidth = columns.reduce((sum, col) => sum + (col.flex || 0), 0);
  const remainingColumns = columns.filter(col => !col.flex).length;
  const defaultFlex = remainingColumns > 0 ? (100 - totalDefinedWidth) / remainingColumns : 0;

  return (
    <div className="table-wrapper">
      <table className="table">
        <colgroup>
          {columns.map((col, index) => (
            <col
              key={index}
              style={{ width: `${col.flex || defaultFlex}%` }}
            />
          ))}
        </colgroup>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="text-label-med">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="text-body-med">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
