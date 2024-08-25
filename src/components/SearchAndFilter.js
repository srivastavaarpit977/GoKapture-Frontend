import React from 'react';
import useStore from '../store';

const SearchAndFilter = () => {
  const { searchQuery, filterCriteria, setSearchQuery, setFilterCriteria } = useStore(state => ({
    searchQuery: state.searchQuery,
    filterCriteria: state.filterCriteria,
    setSearchQuery: state.setSearchQuery,
    setFilterCriteria: state.setFilterCriteria,
  }));

  return (
    <div className="mb-4">
      <label className="mr-2">
        Search:
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="ml-2 border p-1"
        />
      </label>
      <label className="ml-4">
        Filter:
        <input
          type="text"
          value={filterCriteria}
          onChange={(e) => setFilterCriteria(e.target.value)}
          className="ml-2 border p-1"
        />
      </label>
    </div>
  );
};

export default SearchAndFilter;
