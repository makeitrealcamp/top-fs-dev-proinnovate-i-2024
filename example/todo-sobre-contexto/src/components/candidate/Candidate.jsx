import PropTypes from 'prop-types';
import './candidate.css';

const Candidate = ({ candidate, onHandleVote }) => {
  const handleVote = () => {
    onHandleVote(candidate.id);
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
