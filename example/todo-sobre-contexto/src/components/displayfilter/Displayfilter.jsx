import PropTypes from 'prop-types';

import { useAppContext, FILTER_CHANGE } from '../../store';

import './displayfilter.css';

const DisplayFilter = () => {
  const { state, dispatch } = useAppContext();

  const handleChange = ({ target }) => {
    const { value } = target;

    dispatch({
      type: FILTER_CHANGE,
      payload: value,
    });
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
          checked={state.filterType === 'PERCENTAGE'}
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
          checked={state.filterType === 'TOTAL'}
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
