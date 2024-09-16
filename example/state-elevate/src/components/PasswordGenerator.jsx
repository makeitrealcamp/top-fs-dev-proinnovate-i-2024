import PropTypes from 'prop-types';

import NumberButton from './NumberButton';

function PasswordGenerator(props) {
  const { numbers = [], onUpdatePassword } = props;

  const handleClick = (number) => {
    onUpdatePassword(number);
  };

  return (
    <div>
      <div>
        {numbers.map((number) => (
          <NumberButton
            key={number}
            onHandleClick={handleClick}
            value={number}
          />
        ))}
      </div>
    </div>
  );
}

PasswordGenerator.propTypes = {
  /**
   * Array of numbers to generate the buttons
   */
  numbers: PropTypes.arrayOf(PropTypes.number),
  /**
   * Function to handle the click event
   */
  onUpdatePassword: PropTypes.func.isRequired,
};

export default PasswordGenerator;
