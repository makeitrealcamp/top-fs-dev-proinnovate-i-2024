import { useState, useReducer } from 'react';

const initialState = {
  name: '',
  age: 0,
  isActive: false,
  hobbies: [],
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_NAME':
      return {
        ...state,
        name: payload,
      };
    case 'SET_AGE':
      return {
        ...state,
        age: payload,
      };
    case 'SET_IS_ACTIVE':
      return {
        ...state,
        isActive: payload,
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.concat(payload),
      };
    default:
      return state;
  }
}

let count = 1;
export const CUseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [data, setData] = useState(initialState);

  const handleClick = () => {
    dispatch({ type: 'SET_NAME', payload: `John ${count}` });
    count++;
  };

  console.log('state', state);

  return <button onClick={handleClick}>clickme</button>;
};

export default CUseReducerExample;
