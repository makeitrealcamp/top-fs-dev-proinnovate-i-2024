import PropTypes from 'prop-types';

import Candidate from '../candidate/Candidate';

import { useAppContext } from './../../store';

import './candidates.css';

const Candidates = () => {
  const { state } = useAppContext();
  const { candidates } = state;

  return (
    <>
      <h2>Candidates</h2>
      <div className="candidates">
        {candidates.map((candidate) => (
          <Candidate key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </>
  );
};

Candidates.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  onHandleVote: PropTypes.func.isRequired,
};

export default Candidates;
