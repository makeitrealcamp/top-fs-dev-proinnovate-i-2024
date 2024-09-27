import PropTypes from 'prop-types';

import { useAppContext, VOTE } from './../../store';

import './candidate.css';

const Candidate = ({ candidate }) => {
  const { dispatch } = useAppContext();

  const handleVote = () => {
    dispatch({
      type: VOTE,
      payload: candidate.id,
    });
  };

  return (
    <div className="candidate">
      <button type="button" onClick={handleVote}>
        {candidate.name}
      </button>
    </div>
  );
};

export default Candidate;

Candidate.propTypes = {
  candidate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
  onHandleVote: PropTypes.func.isRequired,
};
