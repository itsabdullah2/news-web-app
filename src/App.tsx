import { Routes, Route } from 'react-router-dom';
import SportsPage from './pages/Sports';
import BusinessPage from './pages/Business';
import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/business" element={<BusinessPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
