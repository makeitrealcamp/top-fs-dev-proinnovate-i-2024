import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
import ChildC from './components/ChildC';
import ChildD from './components/ChildD';
import ChildE from './components/ChildE';
// import LoginComponent from './components/ClassComponent';
import Login from './components/Login';
import Register from './components/Register';
import CUseReducerExample from './components/ComponentReducer';

import './App.css';

function App() {
  const product = { name: 'Smartphone', price: 1000, stock: 5 };
  const todos = [
    { name: 'Tarea 1', done: false },
    { name: 'Tarea 2', done: true },
  ];

  const handleClick = () => {
    alert('Click en el botón');
  };

  return (
    <div>
      <CUseReducerExample />
      <hr />
      <Login />
      <hr />
      <Register />
      {/* <LoginComponent /> */}
      <ChildA name="khriztianmoreno" age={34} />
      <hr />
      <ChildB product={product} />
      <hr />
      <ChildC todos={todos} />
      <hr />
      <ChildD onHandleClick={handleClick} />
      <hr />
      <ChildE>
        <h2>Hola</h2>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter yoy email"
          />
          <button>Enviar</button>
        </form>
        <p>Children 3</p>
      </ChildE>
    </div>
  );
}

export default App;
