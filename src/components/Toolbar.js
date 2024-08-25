// src/components/Toolbar.js
import React from 'react';
import useStore from '../store';

const Toolbar = () => {
  const undo = useStore((state) => state.undo);
  const redo = useStore((state) => state.redo);

  return (
    <div className="mb-4">
      <button onClick={undo} className="border px-4 py-2 mr-2">Undo</button>
      <button onClick={redo} className="border px-4 py-2">Redo</button>
    </div>
  );
};

export default Toolbar;
