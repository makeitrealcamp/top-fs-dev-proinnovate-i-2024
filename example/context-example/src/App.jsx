import SimpleCounter from './components/SimpleCounter/Counter';
import { CounterProvider } from './components/SimpleCounter/Context';

import Theme from './components/Theme/Theme';
import { ThemeProvider } from './components/Theme/Context';

import './App.css';

function App() {
  return (
    <>
      <CounterProvider>
        <SimpleCounter />
      </CounterProvider>

      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </>
  );
}

export default App;
