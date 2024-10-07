import { useState } from 'react';
import Results from './components/results/Results';
import Candidates from './components/candidates/Candidates';
import DisplayFilter from './components/displayfilter/Displayfilter';
import TotalVotes from './components/totalvotes/Totalvotes';

import { useAppContext } from './store';

import './App.css';

function App() {
  const { state } = useAppContext();
  const { candidates, filterType } = state;

  return (
    <div>
      <Candidates />
      <DisplayFilter />
      <TotalVotes />
      <Results candidates={candidates} filterType={filterType} />
    </div>
  );
}

export default App;
