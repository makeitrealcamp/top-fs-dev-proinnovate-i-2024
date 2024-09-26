import { useTheme } from './Context';

export const Theme = () => {
  const { state, dispatch } = useTheme();

  const toggleTheme = () => {
    if (state === 'LIGHT') {
      dispatch('DARK');
    } else {
      dispatch('LIGHT');
    }
  };

  return (
    <div>
      <form>
        <input type="checkbox" name="theme" id="theme" onChange={toggleTheme} />
      </form>
      <p className={state === 'LIGHT' ? 'text-blue-800' : 'text-lime-500'}>
        Usar modo {state}{' '}
      </p>
    </div>
  );
};

export default Theme;
