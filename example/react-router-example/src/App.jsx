import { Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import InvoicePage from './pages/Invoice';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="invoice" element={<InvoicePage />} />
      </Routes>
    </>
  );
}

export default App;
