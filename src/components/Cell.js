// src/components/Cell.js
import React, { useState } from 'react';
import useStore from '../store';

const Cell = ({ index }) => {
  const { cells, setCellContent, setFormatting } = useStore();
  const [editing, setEditing] = useState(false);
  const cell = cells[index];

  const handleBlur = (e) => {
    setEditing(false);
    setCellContent(index, e.target.value);
  };

  return (
    <div
      className="border p-2"
      onDoubleClick={() => setEditing(true)}
      style={cell.formatting}
    >
      {editing ? (
        <input
          type="text"
          className="w-full"
          defaultValue={cell.content}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span>{cell.content}</span>
      )}
    </div>
  );
};

export default Cell;
