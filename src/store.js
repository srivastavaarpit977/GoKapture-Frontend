// import {create} from 'zustand';

// const useStore = create((set) => ({
//   cells: Array.from({ length: 1000 }, () => ''),
//   updateCell: (index, value) => set((state) => {
//     const newCells = [...state.cells];
//     newCells[index] = value;
//     return { cells: newCells };
//   }),
//   format: { textAlign: 'left', fontSize: 'text-base' },
//   updateFormat: (newFormat) => set({ format: newFormat }),



//   undo: () => set((state) => {
//     if (state.history.length === 0) return state;
//     const previous = state.history[state.history.length - 1];
//     return {
//       cells: previous,
//       history: state.history.slice(0, -1),
//       future: [state.cells, ...state.future],
//     };
//   }),
//   redo: () => set((state) => {
//     if (state.future.length === 0) return state;
//     const next = state.future[0];
//     return {
//       cells: next,
//       history: [...state.history, state.cells],
//       future: state.future.slice(1),
//     };
//   }),
// }));

// export default useStore;



// src/store/store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  cells: Array.from({ length: 1000 }, () => ''),
  format: {
    textAlign: 'text-left',
    fontSize: 'text-base',
  },
  undoStack: [],
  redoStack: [],
  searchQuery: '', // New state for search
  filterCriteria: '', // New state for filter

  updateCell: (index, value) => set((state) => {
    const newCells = [...state.cells];
    newCells[index] = value;
    const newUndoStack = [...state.undoStack, state.cells];
    return { cells: newCells, undoStack: newUndoStack, redoStack: [] };
  }),

  updateFormat: (newFormat) => set((state) => {
    const newFormatState = { ...state.format, ...newFormat };
    const newUndoStack = [...state.undoStack, state.format];
    return { format: newFormatState, undoStack: newUndoStack, redoStack: [] };
  }),

  undo: () => set((state) => {
    if (state.undoStack.length === 0) return {};
    const lastState = state.undoStack[state.undoStack.length - 1];
    const newUndoStack = state.undoStack.slice(0, -1);
    return { cells: lastState, undoStack: newUndoStack, redoStack: [...state.redoStack, state.cells] };
  }),

  redo: () => set((state) => {
    if (state.redoStack.length === 0) return {};
    const redoState = state.redoStack[state.redoStack.length - 1];
    const newRedoStack = state.redoStack.slice(0, -1);
    return { cells: redoState, redoStack: newRedoStack, undoStack: [...state.undoStack, state.cells] };
  }),

  // Actions for search and filter
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilterCriteria: (criteria) => set({ filterCriteria: criteria }),
}));

export default useStore;
