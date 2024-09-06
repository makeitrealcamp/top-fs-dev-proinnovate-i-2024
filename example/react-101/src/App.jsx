import './App.css';

// PascalCase -> ComponentNumberOne
// camelCase -> functionNumberOne
// kebab-case -> file-name
// snake_case -> variable_name
// CONSTANT_CASE -> const

function Header() {
  return <header>Header</header>;
}

function Footer() {
  return <footer>Footer</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <main>Main</main>
      <Footer />
    </div>
  );
}

export default App;
