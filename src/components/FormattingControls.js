import React from 'react';
import useStore from '../store';

const FormattingControls = () => {
  const { updateFormat } = useStore(state => ({
    updateFormat: state.updateFormat,
  }));

  const handleFormatChange = (e) => {
    const { name, value } = e.target;
    updateFormat(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-6 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Formatting Controls</h2>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">
          Text Align:
          <select name="textAlign" onChange={handleFormatChange} className="ml-2 border p-2 rounded bg-white shadow-sm">
            <option value="text-left">Left</option>
            <option value="text-center">Center</option>
            <option value="text-right">Right</option>
          </select>
        </label>
        <label className="block text-gray-700">
          Font Size:
          <select name="fontSize" onChange={handleFormatChange} className="ml-2 border p-2 rounded bg-white shadow-sm">
            <option value="text-xs">Small</option>
            <option value="text-base">Medium</option>
            <option value="text-lg">Large</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default FormattingControls;
