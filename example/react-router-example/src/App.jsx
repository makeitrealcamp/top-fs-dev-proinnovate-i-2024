import { Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import InvoicePage from './pages/Invoice';
import DetailPage from './pages/Detail';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="invoice" element={<InvoicePage />} />
        <Route path="detail/:postId" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
