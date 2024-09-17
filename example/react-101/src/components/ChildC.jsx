// Props de arrays
// arrays de elementos, como listas de datos
// se utilizan para rederizar listas de elementos

// tasks = ["Tarea 1", "Tarea 2", "Tarea 3"] -> array de strings
// tasks = [{ name: "Tarea 1", done: false }, { name: "Tarea 2", done: true }] -> array de objetos
import PropTypes from 'prop-types';

export const ChildC = (props) => {
  const { todos = [] } = props;
  return (
    <ul>
      {todos.map((todo, indx) => {
        // todo -> { name: "Tarea 1", done: false }
        return (
          <li
            key={indx}
            style={{ textDecoration: todo.done ? 'underline' : 'none' }}
          >
            {todo.name}
          </li>
        );
      })}
    </ul>
  );
};

ChildC.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      done: PropTypes.bool,
    })
  ),
};

export default ChildC;
