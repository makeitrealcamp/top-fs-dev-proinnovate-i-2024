import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import InvoicePage from './pages/Invoice';
import DetailPage from './pages/Detail';
import RegisterPage from './pages/Register';
import ActivePage from './pages/Active';

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
        <Route path="register" element={<RegisterPage />} />
        <Route path="verify-account/:token" element={<ActivePage />} />
      </Routes>
    </>
  );
}

export default App;
