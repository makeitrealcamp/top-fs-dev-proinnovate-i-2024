import { useState } from 'react';
import Results from './components/results/Results';
import Candidates from './components/candidates/Candidates';
import DisplayFilter from './components/displayfilter/Displayfilter';
import TotalVotes from './components/totalvotes/Totalvotes';

import './App.css';

const initialState = [
  {
    id: 1,
    name: 'Don Julio',
    votes: 0,
    percentage: 0,
  },
  {
    id: 2,
    name: 'Jhonny Walker',
    votes: 0,
    percentage: 0,
  },
  {
    id: 3,
    name: 'Jack Daniels',
    votes: 0,
    percentage: 0,
  },
  {
    id: 4,
    name: 'Jose Cuervo',
    votes: 0,
    percentage: 0,
  },
];

function App() {
  const [candidates, setCandidates] = useState(initialState);
  const [filterType, setFilterType] = useState('TOTAL');

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleVote = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Candidates candidates={candidates} onHandleVote={handleVote} />
      <DisplayFilter
        onHandleFilterChange={handleFilterChange}
        filterType={filterType}
      />
      <TotalVotes />
      <Results candidates={candidates} filterType={filterType} />
    </div>
  );
}

export default App;
