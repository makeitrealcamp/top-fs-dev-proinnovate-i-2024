import PropTypes from 'prop-types';

import './displayfilter.css';

const DisplayFilter = ({ onHandleFilterChange, filterType }) => {
  const handleChange = ({ target }) => {
    const { value } = target;
    onHandleFilterChange(value);
  };

  return (
    <div className="displayoptions">
      <label htmlFor="percentage" className="displayoptions--input">
        <input
          type="radio"
          value="PERCENTAGE"
          id="percentage"
          name="type"
          onChange={handleChange}
          checked={filterType === 'PERCENTAGE'}
          className="displayoptions--input"
        />
        <span>Total %</span>
      </label>
      <label htmlFor="total" className="displayoptions--input">
        <input
          type="radio"
          value="TOTAL"
          id="total"
          name="type"
          checked={filterType === 'TOTAL'}
          onChange={handleChange}
          className="displayoptions--input"
        />
        <span>Total</span>
      </label>
    </div>
  );
};

DisplayFilter.propTypes = {
  onHandleFilterChange: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
};

export default DisplayFilter;
