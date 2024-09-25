import PropTypes from 'prop-types';

import './results.css';

const Results = ({ candidates = [], filterType }) => {
  return (
    <>
      <h2>Results</h2>
      <div className="results">
        {candidates.map((candidate) => (
          <div key={candidate.id}>
            <div className="results--label">{candidate.name}</div>
            <div className="results--value">
              {filterType === 'PERCENTAGE'
                ? `${candidate.percentage.toFixed(0)}%`
                : candidate.votes}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Results.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  filterType: PropTypes.string,
};

Results.defaultProps = {
  filterType: 'TOTAL',
};

export default Results;
