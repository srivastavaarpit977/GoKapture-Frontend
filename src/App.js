import React from 'react';
import Grid from './components/Grid';
import FormattingControls from './components/FormattingControls';
import useStore from './store';
import './index.css';
function App() {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"> Spreadsheet Application </h1>
      <FormattingControls />
      <Grid />
     
    </div>
  );
}

export default App;
