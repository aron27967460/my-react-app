import React from 'react';
import './table.css';
import '../styles/typography.css';

export const Table = ({ columns, data }) => {

  return (
    <div className="table-wrapper">
      <div className="table-scroll">
      <table className="table">
      <colgroup>
          {columns.map((col, index) => (
            <col
              key={index}
              style={{
                minWidth: col.minWidth || '8rem', // fallback to prevent squashing
                width: col.width || 'auto', // optional fixed width if provided
              }}
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
    </div>
  );
};

export default Table;
