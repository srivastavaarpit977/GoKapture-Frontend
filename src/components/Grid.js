import React from 'react';
import useStore from '../store';
import SearchAndFilter from './SearchAndFilter';

const Grid = () => {
  const cellsPerPage = 100;
  const [page, setPage] = React.useState(0);

  const { cells, updateCell, format, searchQuery, filterCriteria, undo, redo } = useStore(state => ({
    cells: state.cells,
    updateCell: state.updateCell,
    format: state.format,
    searchQuery: state.searchQuery,
    filterCriteria: state.filterCriteria,
    undo: state.undo,
    redo: state.redo,
  }));

  const handleChange = (index, event) => {
    updateCell(index, event.target.value);
  };

  const filteredCells = cells.filter(cell => 
    cell.includes(searchQuery) && cell.includes(filterCriteria)
  );

  const paginatedCells = filteredCells.slice(page * cellsPerPage, (page + 1) * cellsPerPage);

  const cellClass = () => {
    return `border p-2 ${format.textAlign} ${format.fontSize} bg-white text-gray-900 transition-colors duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`;
  };

  return (
    <div>
      <SearchAndFilter />
      <div className="grid grid-cols-10 gap-1 p-2">
        {paginatedCells.map((cell, index) => (
          <input
            key={index}
            type="text"
            value={cell}
            onChange={(e) => handleChange(page * cellsPerPage + index, e)}
            className={cellClass()}
            style={{ minWidth: '80px', minHeight: '30px' }}
          />
        ))}
      </div>
      <div className="mt-4 flex space-x-2">
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 0}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          Previous
        </button>
        <button 
          onClick={() => setPage(page + 1)} 
          disabled={paginatedCells.length < cellsPerPage}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          Next
        </button>
        <button 
          onClick={undo} 
          disabled={useStore.getState().undoStack.length === 0}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:bg-gray-300"
        >
          Undo
        </button>
        <button 
          onClick={redo} 
          disabled={useStore.getState().redoStack.length === 0}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:bg-gray-300"
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default Grid;
