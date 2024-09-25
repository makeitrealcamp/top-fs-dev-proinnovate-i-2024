import PropTypes from 'prop-types';

import Candidate from '../candidate/Candidate';

import './candidates.css';

const Candidates = ({ candidates, onHandleVote }) => {
  return (
    <>
      <h2>Candidates</h2>
      <div className="candidates">
        {candidates.map((candidate) => (
          <Candidate
            key={candidate.id}
            candidate={candidate}
            onHandleVote={onHandleVote}
          />
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
