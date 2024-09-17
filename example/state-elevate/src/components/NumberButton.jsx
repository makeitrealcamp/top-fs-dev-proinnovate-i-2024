import PropTypes from 'prop-types';

export const NumberButton = (props) => {
  const { onHandleClick, value } = props;

  const handleClick = () => {
    onHandleClick(value);
  };

  return <button onClick={handleClick}>{value}</button>;
};

NumberButton.propTypes = {
  /**
   * Function to handle the click event
   */
  onHandleClick: PropTypes.func.isRequired,
  /**
   * The value of the button
   */
  value: PropTypes.number.isRequired,
};

export default NumberButton;
